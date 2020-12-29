	const secondHand = document.querySelector('.second-hand');
	const minHand = document.querySelector('.min-hand');
	const hourHand = document.querySelector('.hour-hand');
	const hand = document.querySelector('.hand');
	const clock = document.querySelector('.clock');
//      console.log(clock);
      const val = 0.5;
      const val1 = 0.8;
//      clock.style.transform = `scaleY(${val1})`;
	  
	  function setDate() {
//		 console.log('Hi');
		  const now = new Date();
		  const seconds = now.getSeconds();
		  const minutes = now.getMinutes();
//		  console.log(minutes);
		  const hours = now.getHours();
//		  console.log(hours);
		  
		  const secondsDegrees = (seconds / 60) * 360; //albo (360/60) * seconds
		  if ((secondsDegrees === 360) || (secondsDegrees === 0)) {                         secondHand.style.transitionDuration = '0s';
//             clockFace.style.transform = `rotate3d(${1}, ${0}, ${0}, ${360}deg)`;
//             clock.style.transform = `scaleY(${0.5})`;
//               clock.classList.add('flipInX');      
//               clock.classList.add('flip');      
               clock.classList.add('headShake');      
            } else {
                secondHand.style.transitionDuration = '0.05s';
//                clock.classList.remove('flipInX');
//                clock.classList.remove('flip');
                clock.classList.remove('headShake');
            }
		  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
		  
		  const minutesDeg = (6*minutes);
		  if ((minutesDeg === 360) || (minutesDeg === 0)) {
              minHand.style.transitionDuration = '0s';
              clock.classList.add('flip');
          }
		  else {
              minHand.style.transitionDuration = '0.05s';
              clock.classList.remove('flip');
          }
		  minHand.style.transform = `rotate(${minutesDeg}deg)`;
		  
		  const hoursDeg = (hours*30) + 30*(minutesDeg/360);
//		  console.log(hoursDeg);
		  if ((hoursDeg === 360) || (hoursDeg === 0)) hourHand.style.transitionDuration = '0s';
		  else hourHand.style.transitionDuration = '0.05s';
		  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
		  
	  };
	  
	  setInterval(setDate, 1000);