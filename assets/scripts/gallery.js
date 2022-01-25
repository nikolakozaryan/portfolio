export default gallery;

function gallery() {
    const seasons = document.querySelector('.seasons-container');
    const portfolioImages = document.querySelectorAll('.photo');
    const seasonButtons = document.querySelectorAll('.season');

    seasons.addEventListener('click', event => {
        const activeSeasonButton = event.target;
        console.log('click')
        if (activeSeasonButton.classList.contains('season')) {
            seasonButtons.forEach(item => item.classList.remove('active'))
            activeSeasonButton.classList.add('active');
            portfolioImages.forEach((image, index) => {
                image.style.backgroundImage = `url('./assets/gallery/${activeSeasonButton.dataset.season}/${index + 1}.jpg')`
            })
        }
    })
}