module.exports = {
  apps: [
    {
      name: 'gter_school',
      namespace: 'post',
      script: 'python3 main.py --config config/config.json',
      ignore_watch: ['node_modules', 'logs', 'tmp', '*.pyc'],
      // cron_restart: '*/5 * * * * *'
    }
  ]
};
