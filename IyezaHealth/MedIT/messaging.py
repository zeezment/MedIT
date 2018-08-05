from twilio.rest import Client

# Your Account SID from twilio.com/console
account_sid = "AC526831c460c4f83cd8a0008b4fa23d95"
# Your Auth Token from twilio.com/console
auth_token = "9ed1095be621dc9d0c92a46b7e037dd3"

client = Client(account_sid, auth_token)

def send_notification():
    message = client.messages.create(
        to="+27614062120",
        from_="+13476581248",
        body="Hi Gogo Flo! Your medication will be delivered tomorrow, 06 August2018, between 8am-12pm. "
             "See you tomorrow and stay healthy!")

    print(message.sid)