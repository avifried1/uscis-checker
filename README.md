[USCIS Checker](https://github.com/avifried1/uscis-checker)
==============

Dockerized service for checking [USCIS case status](https://egov.uscis.gov/casestatus/landing.do) and sending yourself a Slack alert.

Uses the 

## Prerequisites

- Docker

## Getting Started

- Clone Project

```bash
git clone https://github.com/avifried1/uscis-checker
```

- Change to project directory

```bash
cd uscis-checker
```
 
- Copy environment file example:

```bash
cp .env.example .env
```

- Make sure you create a Slack [incoming webhook integration](https://api.slack.com/incoming-webhooks)

- Edit the following parameters in the newly-created `.env` file:

    - SLACK_URL=https://hooks.slack.com/services/SLACKHOOKURL
    - RECEIPT_NUMBER=SRC123456789 (your case receipt number)
    - INTERVAL_MINS=1440 (an interval for the check in mins)

- Build the docker image:

```bash
docker build -t uscis-checker .
```

- Run the container

```bash
docker run -d --restart always --name uscis-checker --env-file .env uscis-checker
```

## Credits

Avi Friedman

## License

Licensed under the MIT license (see: [license](/LICENSE))