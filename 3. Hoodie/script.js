
        document.getElementById('discountButton').addEventListener('click', function() {
            const messageElement = document.getElementById('message');
            const button = this;
            
            // Add loading state
            button.disabled = true;
            button.innerHTML = '<span class="loading-spinner"></span><span class="btn-text">Processing...</span>';
            button.classList.add('loading');
            
            // Show success message with animation
            setTimeout(() => {
                messageElement.style.display = 'block';
                setTimeout(() => messageElement.classList.add('show'), 100);
                
                // Animate progress bar
                const progressBar = messageElement.querySelector('.loading-progress');
                progressBar.style.width = '100%';
                
                // Redirect after animation
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 3000);
            }, 1500);
        });
