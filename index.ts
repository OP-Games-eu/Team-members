import express, { Request, Response } from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 8080;

// CORS aktivieren, damit dein SvelteKit Frontend (Port 5173) zugreifen darf
app.use(cors());

app.get('/api/team', (req: Request, res: Response) => {
    try {
        // Liest die team.json Datei live aus
        const filePath = path.join(__dirname, 'team.json');
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const teamData = JSON.parse(fileContent);
        
        // Sendet die Daten an dein Frontend
        res.json(teamData);
    } catch (error) {
        console.error("Fehler beim Lesen der team.json:", error);
        res.status(500).json({ error: "Interner Server Fehler" });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Team-API läuft auf http://localhost:${PORT}`);
});