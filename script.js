const pianoKeys = document.querySelectorAll(".piano-keys .key");
volumeSlider = document.querySelector(".volume-slider input");
keysCheckbox = document.querySelector(".keys-checkbox input");


let allKeys =  [], audio = new Audio("tunes/a.wav"); // by default, audio src is "a" tune

const playTune = (key) => {
   audio.src = `tunes/${key}.wav`; // passing audio src through based on the key that is pressed
   audio.play(); // playing audio


   const clickedKey = document.querySelector(`[data-key="${key}"]`); // getting the element of clicked key
      clickedKey.classList.add("active");
      setTimeout(() => { // removes the active class from the element of the clicked key
         clickedKey.classList.remove("active");
      }, 150);

}

pianoKeys.forEach(key => {
   allKeys.push(key.dataset.key); // adding data-key value to the allKeys array
   // This calls the playTune function by passing the data-key value as the argument
   key.addEventListener("click", () => playTune(key.dataset.key));

});

const showHideKeys = () => {
   // hiding keys when Show Keys slider is toggled.
   pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const handleVolume = (e) => {
   audio.volume = e.target.value; // passing the range slider value as an audio volume
}

const pressedKey = (e) => {
   // if the pressed key is in the allKeys array, only call the playTune function then
   if(allKeys.includes(e.key)) playTune(e.key);
}


volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
keysCheckbox.addEventListener("input", showHideKeys)

