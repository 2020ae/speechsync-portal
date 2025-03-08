
// DOM Elements
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const textInput = document.getElementById('text-input');
const voiceSelect = document.getElementById('voice-select');
const speedRange = document.getElementById('speed-range');
const speedValue = document.getElementById('speed-value');
const convertButton = document.getElementById('convert-button');
const audioOutput = document.getElementById('audio-output');
const audioPlayer = document.getElementById('audio-player');
const downloadButton = document.getElementById('download-button');
const toastContainer = document.getElementById('toast-container');

// Mobile menu toggle
if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
  });
}

// Speed range input
if (speedRange) {
  speedRange.addEventListener('input', () => {
    speedValue.textContent = parseFloat(speedRange.value).toFixed(1);
  });
}

// Text to speech conversion
if (convertButton) {
  convertButton.addEventListener('click', () => {
    const text = textInput.value.trim();
    
    if (!text) {
      showToast('Error', 'Please enter some text to convert', 'error');
      return;
    }
    
    // Simulate loading
    convertButton.disabled = true;
    convertButton.innerHTML = 'Converting...';
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      // In a real implementation, this would be an API call to a TTS service
      // For demo purposes, we're using the browser's built-in speech synthesis
      
      try {
        // Use browser's Speech Synthesis API if available
        if ('speechSynthesis' in window) {
          const speech = new SpeechSynthesisUtterance(text);
          const voices = window.speechSynthesis.getVoices();
          
          // Match the selected voice option to an available voice
          const voiceOption = voiceSelect.value;
          let selectedVoice;
          
          if (voiceOption.includes('en-US')) {
            selectedVoice = voices.find(voice => voice.lang.includes('en-US'));
          } else if (voiceOption.includes('en-GB')) {
            selectedVoice = voices.find(voice => voice.lang.includes('en-GB'));
          }
          
          if (selectedVoice) {
            speech.voice = selectedVoice;
          }
          
          // Set the speech rate
          speech.rate = parseFloat(speedRange.value);
          
          // Create audio element
          // This is a demo - in a real app you'd get an audio URL from your TTS API
          // For demonstration purposes, we'll create a test audio URL
          
          // Since browser's SpeechSynthesis doesn't provide downloadable audio,
          // we'll simulate a successful conversion
          audioPlayer.src = 'data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV';
          
          audioOutput.classList.remove('hidden');
          showToast('Success', 'Text converted to speech successfully', 'success');
        } else {
          // Fallback for browsers that don't support Speech Synthesis
          showToast('Error', 'Speech synthesis is not supported in your browser', 'error');
        }
      } catch (error) {
        console.error('Speech synthesis error:', error);
        showToast('Error', 'Failed to convert text to speech', 'error');
      } finally {
        convertButton.disabled = false;
        convertButton.innerHTML = 'Convert to Speech';
      }
    }, 1500);
  });
}

// Download button
if (downloadButton) {
  downloadButton.addEventListener('click', () => {
    // In a real implementation, you would create a download link to the audio file
    // For demonstration, we'll simulate a download
    
    const a = document.createElement('a');
    a.href = audioPlayer.src;
    a.download = 'speechsync-audio.mp3';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    showToast('Success', 'Audio file downloaded', 'success');
  });
}

// Toast notification function
function showToast(title, description, type = 'default') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  toast.innerHTML = `
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-description">${description}</div>
    </div>
    <button class="toast-close">×</button>
  `;
  
  toastContainer.appendChild(toast);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease forwards';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 5000);
  
  // Close button
  const closeButton = toast.querySelector('.toast-close');
  closeButton.addEventListener('click', () => {
    toast.style.animation = 'slideOut 0.3s ease forwards';
    setTimeout(() => {
      toast.remove();
    }, 300);
  });
}

// Initialize Speech Synthesis voices
function initVoices() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = function() {
      // Voices are loaded
      console.log('Speech synthesis voices loaded');
    };
  }
}

// Create additional pages
function createPages() {
  // This function would be used to dynamically create additional pages in a SPA
  // For this HTML/CSS/JS version, we'll use separate HTML files instead
}

// Page initialization
document.addEventListener('DOMContentLoaded', () => {
  // Initialize voices
  initVoices();
  
  // Highlight current page in nav
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath || 
        (currentPath === '/' && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
