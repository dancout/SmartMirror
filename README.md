# SmartMirror
A build off the "Magic Mirror" base. A smart mirror that will display a web page, and eventually new additional modules.

The base "Magic Mirror" project can be found <a href="https://github.com/MichMich/MagicMirror">here</a>.

The SmartMirror project builds MichMich's entire MagicMirror project, then adds a small SmartMirror folder in the MagicMirror directory.

This is done through the "SmartMirror.sh" file, pulling MichMich's project, pulling the DanCout project, and then (for now) overwriting the config.js file.

To start this project for yourself on a linux machine, open the terminal and enter 
```bash
bash -c "$(curl -sL https://raw.githubusercontent.com/DanCout/SmartMirror/master/SmartMirror.sh)"
```

