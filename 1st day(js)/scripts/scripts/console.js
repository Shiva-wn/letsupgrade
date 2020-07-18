
            
            // this test the speed of the code
            console.time('timetaken')
            // we can debug using console.log here we are using a string. 
            console.log("various fuction of console log ");
            // this can be able when you want to groupcertain details together to read them properly
            console.group('User Details');
            console.log('name:jhon');
            console.log('job:Software Developer');
            // Nested 
            console.groupCollapsed('address');
            console.log('Street:123town');
            console.log('city:Sanfrancisco');
            console.log('state:CA')
            console.groupEnd();
            // displays how the code ended at a certain end of point
            console.trace();
            // this helps display warning
            console.warn("hey this is warning")
            // displays error symbol on a webpage
            console.error('An error occured');
            // this checks the total time taken to complete the program
            console.timeEnd('time taken');