const fetch = require('node-fetch');
const rus = require('req-uscis-status');
const slackUrl = process.env.SLACK_URL;
const receiptNumber = process.env.RECEIPT_NUMBER;
const checkIntervalMinutes = process.env.INTERVAL_MINS;
const msgPayload = {
    color: "#36a64f"
};

console.log(`Started USCIS Checker (check interval: ${checkIntervalMinutes} minutes)`);
setInterval(() => {
    console.log(`Checking USCIS case status for receipt number ${receiptNumber}`);
    rus.getStatus(receiptNumber,
        async (err, statusObject) => {
            err = err || statusObject.errHtml;
            if (err) {
                return console.log(err)
            }
            const status = statusObject.statusLongText;
            const payload = {
                attachments: [{
                    ...msgPayload,
                    text: status
                }]
            };
            await fetch(slackUrl, {
                method: 'POST',
                body: JSON.stringify(payload)
            });
            console.log(status);
        }
    );
}, checkIntervalMinutes * 60 * 1000);