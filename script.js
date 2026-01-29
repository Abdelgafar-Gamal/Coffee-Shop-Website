document.getElementById('form-align').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const persons = document.querySelector('.num-person').value;
    const date = document.querySelector('.date').value;
    const time = document.querySelector('.time').value;

    console.log('Reservation Details:');
    console.log('Number of Persons:', persons);
    console.log('Date:', date);
    console.log('Time:', time);
});


document.getElementById('blog-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('blog-section').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('shop-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.gallery').scrollIntoView({ behavior: 'smooth' });
});