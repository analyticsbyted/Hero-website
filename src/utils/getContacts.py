import os
import json
import boto3

def get_contacts(table_name):
    try:
        # Initialize a DynamoDB resource object for the current region
        dynamodb = boto3.resource('dynamodb')

        # Select the DynamoDB table
        table = dynamodb.Table(table_name)

        # Scan the table to retrieve all items
        response = table.scan()
        data = response['Items']

        # if there are more items in the table, retrieve them
        while 'LastEvaluatedKey' in response:
            response = table.scan(ExclusiveStartKey=response['LastEvaluatedKey'])
            data.extend(response['Items'])

        # Return the list of contacts
        return data
    except Exception as e:
        # Handle exceptions and return an error response
        return {'error': str(e)}

def lambda_handler(event, context):
    # Get the DynamoDB table name from the environment variable
    table_name = os.environ.get('TABLE_NAME')

    if not table_name:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'TABLE_NAME environment variable is not set'})
        }

    # Retrieve contacts from DynamoDB
    contacts = get_contacts(table_name)

    # Return the contacts
    return {
        'statusCode': 200,
        'body': json.dumps(contacts)
    }

if __name__ == "__main__":
    # When running the script locally, use 'contactData' as the table name if TABLE_NAME is not set
    table_name = os.environ.get('TABLE_NAME', 'contactData')
    contacts = get_contacts(table_name)
    print(contacts)
