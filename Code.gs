/*
* FROM: https://webapps.stackexchange.com/questions/85625/change-the-color-of-multiple-google-calendar-events and https://script.google.com/u/1/home/projects/1RwZIYI_IYEaiTco1JerkTJjyAhLYqpwluqkoBYmqxiYLLGtoTQaT67r3/edit
*
* DOC: https://developers.google.com/calendar/api/v3/reference/events
*/

function myFunction() { 
  
  var calendarName = "Test";                //The name of the calendar you want to modify
  
  var startDate = new Date("2023-11-01");   //The start of the time range in which the events exist INCLUDED

  var endDate = new Date("2023-11-30");     //The end of the time range in which the events exist EXCLUDED
  
  var keyword = "";                         //The keyword to search for in the event title

  var mytype = "focusTime";                 //The type of event to search for
  
  var where = 0;                            //Where to search for events (0 = title; 1 = description)
  
  var color = "Blueberry";                  //The color to change the events to
    
  /* var calendarId = CalendarApp.getCalendarsByName(calendarName)[0].getId(); */
  var calendarId = "primary";
  
  var optionalArgs = {
    timeMin: startDate.toISOString(),
    timeMax: endDate.toISOString(),
    showDeleted: false,
    singleEvents: true,
    orderBy: 'startTime'
  };
  
  var service = Calendar.Events;
  var response = Calendar.Events.list(calendarId, optionalArgs);
  var events = response.items;
 
  for (i = 0; i < events.length; i++) {    
      
    if (where == 0)
      var searchResult = events[i].summary.search(keyword);
    else if (where == 1){
      if (events[i].description == undefined)
        continue;
      var searchResult = events[i].description.search(keyword);
    }
 
    if ((searchResult > -1) && (events[i].eventType == mytype)){
      Logger.log(events[i].summary);
    
      if (color == "Lavender")
        events[i].colorId = 1;
      else if (color == "Sage")
        events[i].colorId = 2;
      else if (color == "Grape")
        events[i].colorId = 3;
      else if (color == "Flamingo")
        events[i].colorId = 4;
      else if (color == "Banana")
        events[i].colorId = 5;
      else if (color == "Tangerine")
        events[i].colorId = 6;
      else if (color == "Peacock")
        events[i].colorId = 7;
      else if (color == "Graphite")
        events[i].colorId = 8;
      else if (color == "Blueberry")
        events[i].colorId = 9;
      else if (color == "Basil")
        events[i].colorId = 10;
      else if (color == "Tomato")
        events[i].colorId = 11;
       
      try{  
        service.update(events[i], calendarId, events[i].id);
      }
      catch(e){
        Logger.log(e);
      }
    }
  }
}
