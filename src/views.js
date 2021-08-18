export default class View {
  static resultDiv() {
    const results = document.getElementById('results');
    const h1 = document.createElement('h1');
    h1.id = 'tempH1';
    const h2 = document.createElement('h2');
    results.innerHTML = '';
    return [results, h1, h2];
  }

  static changeBackground(response) {
    const [results,, h2] = View.resultDiv();
    const temp = parseInt(response.main.temp, 10) - 273;

    if (temp > 30) {
      document.body.style.backgroundColor = '#FD6468';
      h2.textContent = '🧊🍹👕🩳';
    } else if (temp > 10) {
      document.body.style.backgroundColor = 'lightskyblue';
      h2.textContent = '😎🍹👕🩳';
    } else if (temp < 10) {
      document.body.style.backgroundColor = 'lightskyblue';
      h2.textContent = '🧤🧣🧥';
    }

    return results.appendChild(h2);
  }

  static errorMessage(response) {
    const [results, h1, p] = View.resultDiv();
    h1.textContent = 'Ops, Please try again!';
    p.textContent = response.message;
    return results.append(h1, p);
  }

  static result(response, fTrue) {
    const [results, h1, p] = View.resultDiv();

    if (fTrue) {
      const fTemp = ((parseInt(response.main.temp, 10) - 273) * 9) / 5 + 32;
      h1.textContent = `${fTemp}°F`;
      View.changeBackground(response);
    } else {
      const cTemp = parseInt(response.main.temp, 10) - 273;
      h1.textContent = `${cTemp}°C`;
      View.changeBackground(response);
    }
    return results.appendChild(h1, p);
  }
}