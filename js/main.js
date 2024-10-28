
// Cargar la barra de navegación
    // Obtener la ruta desde el atributo data-navbar-path
    const navbarContainer = document.getElementById('navbar-container');
    const navbarPath = navbarContainer.getAttribute('data-navbar-path');

    // Cargar la barra de navegación
    fetch(navbarPath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            navbarContainer.innerHTML = data;
        })
        .catch(error => console.error('Error al cargar la barra de navegación:', error));


//barnav hidden
function toggleSubtopic(subtopicId) {
    const subtopic = document.getElementById(subtopicId);
    if (subtopic) {  // Check if the element exists
        if (subtopic.classList.contains('hidden')) {
            subtopic.classList.remove('hidden');
        } else {
            subtopic.classList.add('hidden');
        }
    } else {
        console.error(`No element found with id: ${subtopicId}`);
    }
}
document.addEventListener("DOMContentLoaded", function() {
    // Cargar la barra de navegación al iniciar la página
    const navbarContainer = document.getElementById('navbar-container');
    const navbarPath = navbarContainer.getAttribute('data-navbar-path');
    
    fetch(navbarPath)
        .then(response => response.text())
        .then(data => {
            navbarContainer.innerHTML = data;
        })
        .catch(error => console.error('Error cargando la barra de navegación:', error));

    // Función para cargar contenido dinámico
    function loadContent(url) {
        const contentContainer = document.getElementById('content-container');

        fetch(url)
            .then(response => response.text())
            .then(data => {
                contentContainer.innerHTML = data;
            })
            .catch(error => console.error('Error cargando contenido:', error));
    }

    // Asignar eventos a los enlaces del navbar
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            e.preventDefault(); // Evitar la recarga de la página
            const pageUrl = e.target.getAttribute('href');
            loadContent(pageUrl); // Cargar el contenido dinámicamente
        }
    });
});


function checkEnter(event) {
    // Verifica si la tecla presionada es Enter
    if (event.key === 'Enter') {
        highlightText(); // Llama a la función de búsqueda
    }
}
// highligh text
function highlightText() {
    // Limpiar el texto resaltado previamente
    let contentElement = document.getElementById("content");
    let originalText = contentElement.innerHTML.replace(/<mark class="highlight">(.*?)<\/mark>/g, '$1');
    contentElement.innerHTML = originalText;

    // Obtener el texto a buscar
    let searchText = document.getElementById("searchInput").value;

    if (searchText) {
        let regex = new RegExp(`(${searchText})`, "gi");
        let highlightedText = originalText.replace(regex, '<mark class="highlight">$1</mark>');
        contentElement.innerHTML = highlightedText;
    }

}

//modals
function openModal() {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImage");
    const infographicImg = document.querySelector(".infographic img");

    modal.style.display = "block";
    modalImg.src = infographicImg.src; // Usar la misma imagen del modal
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
/*
let utterance;
let isPlaying = false;
let progressBar = document.getElementById('progressBar');

function readText() {
    const text = document.getElementById('content').innerText; // Obtiene el texto
    const wordsPerMinute = 100; // Cambia este valor a uno más bajo para ralentizar la lectura
    utterance = new SpeechSynthesisUtterance(text); // Crea un objeto de voz
    
    utterance.onstart = function() {
        isPlaying = true;
        updateProgressBar(text); // Comienza a actualizar la barra de progreso
    };

    utterance.onend = function() {
        isPlaying = false;
        progressBar.style.width = '0%'; // Resetea la barra al final
        document.getElementById('playPauseButton').innerText = 'Reproducir'; // Restablece el botón
    };

    speechSynthesis.speak(utterance); // Reproduce el texto
}

function togglePlayPause() {
    if (isPlaying) {
        speechSynthesis.pause(); // Pausa la reproducción
        isPlaying = false;
        document.getElementById('playPauseButton').innerText = 'Reanudar'; // Cambia el texto del botón
    } else {
        speechSynthesis.resume(); // Reanuda la reproducción
        isPlaying = true;
        document.getElementById('playPauseButton').innerText = 'Pausar'; // Cambia el texto del botón
        updateProgressBar(document.getElementById('content').innerText); // Continúa actualizando la barra
    }
}

function updateProgressBar(text) {
    const textLength = text.length;
    const wordsPerMinute = 150; // Promedio de palabras por minuto
    const words = text.split(' ').length; // Total de palabras
    const duration = (words / wordsPerMinute) * 60; // Duración estimada en segundos

    let elapsed = 0;
    const interval = setInterval(() => {
        if (isPlaying) {
            elapsed += 0.1; // Incrementa el tiempo en cada intervalo
            const percentage = Math.min((elapsed / duration) * 100, 100); // Calcula el porcentaje
            progressBar.style.width = percentage + '%'; // Actualiza la barra

            if (elapsed >= duration) {
                clearInterval(interval); // Detiene el intervalo al final
            }
        } else {
            clearInterval(interval); // Detiene el intervalo si se pausa
        }
    }, 100); // Actualiza cada 100ms
}

// Iniciar la lectura al cargar la página
readText();
*/


function goBack() {
    window.history.back();
}

