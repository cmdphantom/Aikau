var overFourYearsAgo = new Date(); // Start with now
overFourYearsAgo.setFullYear(overFourYearsAgo.getFullYear() - 4); // Remove four years
overFourYearsAgo.setTime(overFourYearsAgo.getTime() - (1000 * 60 * 60 * 24 * 30)); // Remove about a month 

model.jsonModel = {
   services: [
      {
         name: "alfresco/services/LoggingService",
         config: {
            loggingPreferences: {
               enabled: true,
               all: true
            }
         }
      },
      {
         name: "alfresco/services/UserService"
      },
      "alfresco/services/ErrorReporter"
   ],
   widgets:[
      {
         id: "HEADER_USER_STATUS",
         name: "alfresco/header/CurrentUserStatus",
         config: {
            id: "HEADER_USER_STATUS",
            userStatus: "I\'m not so very happy",
            userStatusTime: overFourYearsAgo.toISOString()
         }
      },
      {
         name: "aikauTesting/mockservices/UserMockXhrBad"
      },
      {
         name: "alfresco/logging/SubscriptionLog"
      },
      {
         name: "aikauTesting/TestCoverageResults"
      }
   ]
};