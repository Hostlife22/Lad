const { formElement } = document.forms;

formElement.addEventListener(
  'focus',
  (event) => {
    const activeElement = formElement.querySelector('.focused');

    if (activeElement) {
      activeElement.classList.remove('focused');
    }

    event.target.classList.add('focused');
  },
  true,
);

formElement.addEventListener(
  'blur',
  () => {
    const activeElement = formElement.querySelector('.focused');
    if (activeElement) {
      activeElement.classList.remove('focused');
    }
  },
  true,
);
