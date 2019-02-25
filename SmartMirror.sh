echo "Starting everything"
echo "Install Magic Mirror from MichMich"

yes | bash -c "$(curl -sL https://raw.githubusercontent.com/MichMich/MagicMirror/master/installers/raspberry.sh)"

echo "Everything Started!";
echo "stop mirror if it automatically begins running"

pm2 stop all

echo "stopped pm2. Ran: pm2 stop all";

echo "cd into MagicMirror proj";
cd ~/MagicMirror;

echo "Now clone DanCout's SmartMirror project into this file structure";
git clone https://github.com/dancout/SmartMirror.git;
echo "DanCout's SmartMirror cloned!"

echo "Now enter the SMartMirror directory"
echo "Now move over the config.js file & main.css file";

cd ~/MagicMirror/SmartMirror

bash MoveConfig.sh;

cd ~
echo "now starting the pm2 server, with my webpage";

pm2 start all;

# echo "moving config";

# cp config.js ../config/config.js

# echo "move complete";
