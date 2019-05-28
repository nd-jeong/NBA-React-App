# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Wireframes / Priority Matrix / Functional Components | Complete
|Day 2| Core Application Structure (HTML, CSS, etc.) / Pseudocode / actual code| Incomplete
|Day 3| Initial Clickable Model | Incomplete
|Day 4| More code | Incomplete
|Day 5| Even more code / Styling / MVP| Incomplete
|Day 6| MVP / Post-MVP | Incomplete
|Day 7| Present | Incomplete


## Project Description

An app that lists all NBA teams and players. There will be a navigation sidebar that lists the teams in each conference. Selecting a team will display info about the team as well as list the current roster. Clicking on a players name will display information, pictures, and statistics of that particular player.

## Wireframes

https://drive.google.com/open?id=1-BvF0cCBxHEgU1Vmy-KC4V2oXnh6pJot

## Priority Matrix

https://drive.google.com/open?id=1fJedzeKc5RfTSoWML8O114wUYqNEzZ4I

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### SAMPLE.....
#### MVP 

- Find and use external api 
- Map teams into side nav bar
- Display team info (Team name, team background info, team logo)
- Map team roster under team info
- Display individual player info (Player name, height, weight, portrait, position, player background info)

#### PostMVP 

- Add additional player data (birthday, salary, average statistics per season (Will need to use an additional API for stats))
- Add social media links for each team

## React Architectural Design

https://drive.google.com/file/d/1-4Bv05IOKe0YtTzJn2OUmlDzWfVNLnuF/view?usp=sharing

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 


| Component | Description | 
| --- | :---: |  
| Header | This will render the header |
| Team List / Side Nav Bar | THis will display all teams. There will be two tabs to toggle between conferences | 
| Player Info | This will display player info + portrait | 


| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Project Proposal | H | 3hrs| 3.5hrs |
| Working with API | H | 4hrs| 4hrs |
| Team List Component | H | 4hrs| 3.5hrs |
| Info Display Component | H | 5hrs| 0hrs |
| Player Info Component | H | 4hrs| 0hrs |
| Social Media Component | L | 3hrs| 0hrs |
| Player Statistics Component | L | 6hrs| 0hrs |
| Styling | H | 6hrs| 0hrs |
| Find and work with Second API | M | 5hrs| 0hrs |
| Total | H | 40hrs| 11hrs | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 
 #### SAMPLE.....
| Library | What it Does | 
| --- | :---: |  
| The Sports DB API | Used for team and player info |
| Ball Dont Lie API | Used for team info and player statistics |  

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

#### SAMPLE.....
```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## API Data Snippet
--Team--
```
{
            "idTeam": "134880",
            "idSoccerXML": null,
            "intLoved": null,
            "strTeam": "Atlanta Hawks",
            "strTeamShort": "ATL",
            "strAlternate": "",
            "intFormedYear": "1946",
            "strSport": "Basketball",
            "strLeague": "NBA",
            "idLeague": "4387",
            "strDivision": null,
            "strManager": "",
            "strStadium": "State Farm Arena",
            "strKeywords": "",
            "strRSS": "www.nba.com/hawks/rss.xml",
            "strStadiumThumb": "https://www.thesportsdb.com/images/media/team/stadium/qxstqs1420567922.jpg",
            "strStadiumDescription": "The Atlanta Hawks are an American professional basketball team based in Atlanta, Georgia. The Hawks compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Southeast Division. The team plays its home games at State Farm Arena.\r\n\r\nThe team's origins can be traced to the establishment of the Buffalo Bisons in 1946 in Buffalo, New York, a member of the National Basketball League (NBL) owned by Ben Kerner and Leo Ferris. After 38 days in Buffalo, the team moved to Moline, Illinois, where they were renamed the Tri-Cities Blackhawks. In 1949, they joined the NBA as part of the merger between the NBL and the Basketball Association of America (BAA), and briefly had Red Auerbach as coach. In 1951, Kerner moved the team to Milwaukee, where they changed their name to the Hawks. Kerner and the team moved again in 1955 to St. Louis, where they won their only NBA Championship in 1958 and qualified to play in the NBA Finals in 1957, 1960 and 1961. The Hawks played the Boston Celtics in all four of their trips to the NBA Finals. The St. Louis Hawks moved to Atlanta in 1968, when Kerner sold the franchise to Thomas Cousins and former Georgia Governor Carl Sanders.\r\n\r\nThe Hawks currently own the second-longest drought (behind the Sacramento Kings) of not winning an NBA championship at 60 seasons. The franchise's lone NBA championship, as well as all four NBA Finals appearances, occurred when the team was based in St. Louis. Meanwhile, they went 48 years without advancing past the second round of the playoffs in any format, until finally breaking through in 2015. However, the Hawks are one of only four NBA teams that have qualified to play in the NBA playoffs in 10 consecutive seasons in the 21st century. They achieved this feat between 2008 and 2017. The other teams that have made it to at least 10 consecutive playoff appearances in the 21st century are the San Antonio Spurs (1998–present), Denver Nuggets (2004–2013), and Dallas Mavericks (2001–2012).",
```

--Player--
```
{
            "idPlayer": "34154295",
            "idTeam": "134864",
            "idTeamNational": null,
            "idSoccerXML": "0",
            "idPlayerManager": null,
            "strNationality": "USA",
            "strPlayer": "Kyle Lowry",
            "strTeam": "Toronto Raptors",
            "strTeamNational": null,
            "strSport": "Basketball",
            "intSoccerXMLTeamID": null,
            "dateBorn": "1986-03-25",
            "strNumber": null,
            "dateSigned": null,
            "strSigning": "",
            "strWage": "$31,200,000",
            "strOutfitter": null,
            "strKit": null,
            "strAgent": null,
            "strBirthLocation": "Philadelphia, Pennsylvania",
            "strDescriptionEN": "Kyle Lowry (born March 25, 1986) is an American professional basketball player for the Toronto Raptors of the National Basketball Association (NBA). He attended Cardinal Dougherty High School in Philadelphia and declared for the NBA draft after two seasons with Villanova University under coach Jay Wright. He was selected by the Memphis Grizzlies with the 24th pick in the 2006 NBA draft.\r\n\r\nLowry is credited with helping lead the Raptors to the playoffs and win an Atlantic Division title for the first time in seven years, during the 2013–14 season, his second season with the team. In 2015, he became an NBA All-Star for the first time when he was named an Eastern Conference starter.",
            "strGender": "Male",
            "strSide": null,
            "strPosition": "Point Guard",
            "strCollege": null,
            "strFacebook": "",
            "strWebsite": "",
            "strTwitter": "",
            "strInstagram": "",
            "strYoutube": "",
            "strHeight": "6 ft 1 in (1.85 m)",
            "strWeight": "196 lb (89 kg)",
            "intLoved": "0",
            "strThumb": "https://www.thesportsdb.com/images/media/player/thumb/mlusvy1550408497.jpg",
            "strCutout": "https://www.thesportsdb.com/images/media/player/cutout/hfw3a01550447120.png",
        },
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome | 
| --- | :---: |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
