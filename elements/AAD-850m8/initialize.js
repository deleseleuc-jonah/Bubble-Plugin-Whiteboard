function(instance, context) {
    
	//Unique timestamp for ID of every whiteboard. Without this, we could only have one whiteboard per page.
    let current = new Date();
    let cDate = current.getFullYear() + "-" + (current.getMonth() + 1) + "-" + current.getDate();
    let cTime = current.getHours() + "-" + current.getMinutes() + "-" + current.getSeconds() + "-" + current.getMilliseconds();
    const time = cDate + cTime;
    
    //Save it to the instance. Now we can use this everywhere in our code
    instance.data.time = time;
    
    //Appends whiteboard html to the canvas
    instance.canvas.append(`<div id='wt-container${instance.data.time}' class='whiteboard'></div>`);
}