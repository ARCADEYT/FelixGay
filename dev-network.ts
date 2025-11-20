import { exec } from 'child_process';
import { networkInterfaces } from 'os';

// Función para obtener IP local sin dependencias externas
function getLocalIp(): string {
    const nets = networkInterfaces();

    for (const name of Object.keys(nets)) {
        for (const net of nets[name]!) {
            // Omite direcciones internas y no IPv4
            if (net.family === 'IPv4' && !net.internal) {
                // Prefiere redes WiFi/Ethernet
                if (name.includes('Wi-Fi') || name.includes('wlan') || name.includes('eth') || name.includes('en') || name.includes('Ethernet')) {
                    return net.address;
                }
            }
        }
    }

    // Si no encuentra, usa la primera IP disponible
    for (const name of Object.keys(nets)) {
        for (const net of nets[name]!) {
            if (net.family === 'IPv4' && !net.internal) {
                return net.address;
            }
        }
    }

    return 'localhost';
}

const ip = getLocalIp();
console.log('🌐 IP local detectada:', ip);
console.log(`🚀 Tu app estará disponible en: http://${ip}:3000`);
console.log('📱 Comparte esta URL con otros en tu red');
console.log('----------------------------------------');

// Ejecutar Next.js
exec(`npx next dev --hostname 0.0.0.0`, (error: Error | null, stdout: string, stderr: string) => {
    if (error) {
        console.error(`❌ Error: ${error}`);
        return;
    }
    console.log(stdout);
    if (stderr) {
        console.error(stderr);
    }
});