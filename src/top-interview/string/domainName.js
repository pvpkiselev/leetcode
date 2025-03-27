// Напишите функцию domainName(url), которая принимает URL-адрес в виде строки и возвращает только доменное имя этого адреса.

function domainName(url) {
    const urlWithoutProtocol = url.replace("http://", "").replace("https://", "").replace("www.", "");
    return urlWithoutProtocol.split(".")[0];
}

function domainName2(url) {
    try {
        // Добавляем протокол, если его нет (объект URL требует протокола)
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'http://' + url;
        }

        // Создаём объект URL
        const urlObj = new URL(url);

        // Извлекаем хост (например, "www.example.com")
        let host = urlObj.hostname;

        // Удаляем "www." и другие поддомены
        host = host.replace(/^www\./, '');

        // Возвращаем доменное имя (первую часть хоста)
        return host.split('.')[0];
    } catch (e) {
        // Если URL некорректен, возвращаем null или выбрасываем ошибку
        console.error('Invalid URL:', url);
        return null;
    }
}

console.log(domainName2("http://github.com/carbonfive/raygun")); // "github"
console.log(domainName2("http://www.zombie-bites.com")); // "zombie-bites"
console.log(domainName2("https://sub.domain.com/")) // "sub"
