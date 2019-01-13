echo "Starting everything"

yes | bash -c "$(curl -sL https://raw.githubusercontent.com/MichMich/MagicMirror/master/installers/raspberry.sh)"

echo "Everything Started!";

pm2 stop all

echo "stopped pm2. Ran: pm2 stop all";

echo "cd into MagicMirror proj";
cd ~/MagicMirror;

echo "Now clone DanCout's SmartMirror project into this file structure";
git clone -b Develop https://github.com/dancout/SmartMirror.git;
echo "DanCout's SmartMirror cloned!"

echo "Now move over the config.js file";
cd ~/MagicMirror/SmartMirror

bash SmartMirror.sh;

cd ~
echo "now starting the pm2 server, with my webpage";

pm2 start all;

# echo "moving config";

# cp config.js ../config/config.js

# echo "move complete";
