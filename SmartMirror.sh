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

# install sub modules from github
echo "now adding sub modules"
cd ~/MagicMirror/modules

git clone https://github.com/dolanmiu/MMM-awesome-alexa.git
git clone https://github.com/dmcinnes/MMM-forecast-io.git
git clone https://github.com/AgP42/MMM-SmartWebDisplay.git
git clone https://github.com/Jopyth/MMM-Remote-Control.git
git clone https://github.com/shbatm/MMM-AlexaOnOff.git

cd MMM-awesome-alexa 
npm install

cd ../MMM-forecast-io
npm install

cd ../MMM-SmartWebDisplay
npm install

cd MMM-Remote-Control
npm install

cd MMM-AlexaOnOff
npm install

echo "All sub modules installed!"

echo "now starting the pm2 server, with my webpage";

pm2 start all;
