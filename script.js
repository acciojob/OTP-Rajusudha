 function focusNextInput(currentInput) {
            const maxLength = parseInt(currentInput.getAttribute('maxlength'));
            const currentLength = currentInput.value.length;

            if (currentLength >= maxLength) {
                const nextInput = currentInput.nextElementSibling;
                if (nextInput) {
                    nextInput.focus();
                }
            }

            if (currentLength === 0) {
                const prevInput = currentInput.previousElementSibling;
                if (prevInput) {
                    prevInput.focus();
                }
            }
        }