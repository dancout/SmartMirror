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
	address: "localhost", // Address to listen on, can be:
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
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				tableClass: "xsmall",
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/dancout%40umich.edu/private-6a9ee36da231d0f5f8dea09f604b78b7/basic.ics"
					},

					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/umich.edu_5bbq3saakjpgq72a1l45tpsonc%40group.calendar.google.com/private-4186c988d94f280c9bb9b0d0e12928fa/basic.ics"
					}
				]
				
			}
		},
		{
			module: "compliments",
			position: "bottom_bar"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "New York",
				locationID: "",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "New York",
				locationID: "5128581",  //ID from https://openweathermap.org/city
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
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
			module: "MMM-DarkSkyForecast",
			header: "Weather",
			position: "top_right",
			classes: "default everyone",
			disabled: false,
			config: {
			  apikey: "e038ea9e03a3f696333680cfdce740cb",
			  latitude: "42.299690",
			  longitude: "-83.486794",      
			  iconset: "4c",
			  concise: true,
			  forecastLayout: "table",
			  units: "us"
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
