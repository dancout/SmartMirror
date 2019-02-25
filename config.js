/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				displayType: "analog",
				timeFormat: 12,
				displaySeconds: false,
				timezone: "America/New_York"
			}
		},
		{
			module: "compliments",
			position: "bottom_bar"
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				showDescription: true,
				updateInterval: 20000
			}
		},
		{
			    module: "MMM-awesome-alexa",
			    position: "bottom_bar",
			    config: {
				wakeWord: "Smart Mirror",
				clientId: "YOUR_CLIENT_ID_HERE",
				clientSecret: "YOUR_CLIENT_SECRET_HERE",
				deviceId: "PrototypePi",
				refreshToken: "YOUR_REFRESH_TOKEN_HERE",
				lite: true,
				isSpeechVisualizationEnabled: false
			    }
		},
		{
   			 module: 'MMM-forecast-io',
    			position: 'top_right',  // This can be any of the regions.
    			config: {
      			// See 'Configuration options' for more information.
      				apiKey: 'YOUR_API_KEY_HERE', // Dark Sky API key.
      				// Only required if geolocation doesn't work:
      				latitude: 42.299690, // Canton MI
      				longitude: -83.486794, // Canton, MI
				forecastTableFontSize: 'xsmall',
				alwaysShowPrecipitationGraph: false,
				units: 'imperial'
    			}
  		},
		{
                        module: 'calendar',
                        header: 'Dans Calendar',
                        position: 'top_right',
                        config: {
                                tableClass: 'xsmall',
                                calendars: [
                                        {
                                        symbol: 'calendar-check',
					url: "YOUR_ICS_CALENDAR_URL_HERE"
                                        },


                                ]

                        }
                },
		{
		module: 'MMM-SmartWebDisplay',
		position: 'top_left',	// This can be any of the regions.
		config: {
			// See 'Configuration options' for more information.
			logDebug: false, //set to true to get detailed debug logs. To see them : "Ctrl+Shift+i"
			height:"100%", //hauteur du cadre en pixel ou %
			width:"100%", //largeur
               		updateInterval: 0, //in min. Set it to 0 for no refresh (for videos)
                	NextURLInterval: 0, //in min, set it to 0 not to have automatic URL change. If only 1 URL given, it will be updated
                	displayStateInfos: false,	//to display if the module is on autoloop, or stop. 
                	displayLastUpdate: false, //to display the last update of the URL
			displayLastUpdateFormat: 'ddd - HH:mm:ss', //format of the date and time to display
                	url: [ "https://www.youtube.com/embed/hHW1oY26kxQ?autoplay=1", "https://www.youtube.com/embed/XMIc4uTAMh0?autoplay=1"], //source of the URL to be displayed
                	scrolling: "no" // allow scrolling or not. html 4 only
			}
		},
		{
                module: 'MMM-SmartWebDisplay',
                position: 'middle_center',   // This can be any of the regions.
                config: {
                        // See 'Configuration options' for more information.
                        logDebug: false, //set to true to get detailed debug logs. To see them : "Ctrl+Shift+i"
                        height:"100%", //hauteur du cadre en pixel ou %
                        width:"100%", //largeur
                        updateInterval: 0, //in min. Set it to 0 for no refresh (for videos)
                        NextURLInterval: 0, //in min, set it to 0 not to have automatic URL change. If only 1 URL given, it will be updated
                        displayStateInfos: false,       //to display if the module is on autoloop, or stop. 
                        displayLastUpdate: false, //to display the last update of the URL
                        displayLastUpdateFormat: 'ddd - HH:mm:ss', //format of the date and time to display
                        url: [ "https://www.youtube.com/embed/G0IBqtO1K28?autoplay=1", "https://www.youtube.com/embed/XMIc4uTAMh0?autoplay=1"], //source of the URL t$
                        scrolling: "no" // allow scrolling or not. html 4 only
                        }
                },
		{
  		 	module: 'MMM-Remote-Control'
    			// uncomment the following line to show the URL of the remote control on the mirror
    			//  , position: 'bottom_left'
    			// you can hide this module afterwards from the remote control itself
		},
		{
    			module: 'MMM-AlexaOnOff',
    			config: {
        			devices: [{ 
              					name: "Clock",
              					on: { 
                					notification: "REMOTE_ACTION",
                					payload: { action: "SHOW", module: "module_2_clock" }
              					},
              					off: { 
                					notification: "REMOTE_ACTION",
                					payload: { action: "HIDE", module: "module_2_clock" }
              					},
       		 			},
					{ 
                                                name: "Weather",
                                                on: { 
                                                        notification: "REMOTE_ACTION",
                                                        payload: { action: "SHOW", module: "module_6_MMM-forecast-io" }
                                                },
                                                off: { 
                                                        notification: "REMOTE_ACTION",
                                                        payload: { action: "HIDE", module: "module_6_MMM-forecast-io" }
                                                },
                                        },
					{ 
                                                name: "Calendar",
                                                on: { 
                                                        notification: "REMOTE_ACTION",
                                                        payload: { action: "SHOW", module: "module_7_calendar" }
                                                },
                                                off: { 
                                                        notification: "REMOTE_ACTION",
                                                        payload: { action: "HIDE", module: "module_7_calendar" }
                                                },
                                        },
					{ 
                                                name: "Chill Window",
                                                on: { 
                                                        notification: "REMOTE_ACTION",
                                                        payload: { action: "SHOW", module: "module_8_MMM-SmartWebDisplay" }
                                                },
                                                off: { 
                                                        notification: "REMOTE_ACTION",
                                                        payload: { action: "HIDE", module: "module_8_MMM-SmartWebDisplay" }
                                                },
                                        },
					{ 
                                                name: "The Cute Stuff",
                                                on: { 
                                                        notification: "REMOTE_ACTION",
                                                        payload: { action: "SHOW", module: "module_9_MMM-SmartWebDisplay" }
                                                },
                                                off: { 
                                                        notification: "REMOTE_ACTION",
                                                        payload: { action: "HIDE", module: "module_9_MMM-SmartWebDisplay" }
                                                },
                                        }]
    				}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
