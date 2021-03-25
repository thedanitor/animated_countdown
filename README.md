# Animated Countdown

https://thedanitor.github.io/animated_countdown/

This project is from the Day 34 code along video from Udemy's 50 projects in 50 days series focused on web development. I have added some comments to the CSS and JavaScript to make notes to myself why certain choices are being made and what particular lines of code do.

### Overall Impression

This was an interesting widget with some cool animations. To listen for the "animationend" event to change classes was a totally new concept for me. I would have tried to make a ```setTimeout()``` function using the duration of the animations, but this was defintely cleaner.

With each new custom animation I am shown I realize that it is not that difficult to implement satisfying, original visual effects. I may need to test my creativity and come up with some of my own.

### Things Learned

* There is an animationend event listener that listens for when an animation is finished.
* There is an animationName property that can be used to access the name of a CSS animation.