import * as authService from '../services/authService.js';

export async function register(req, res) {
  try {
    const user = await authService.register(req.body);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function login(req, res) {
  try {
    const tokens = await authService.login(req.body);
    res.json(tokens);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
}

export function refreshToken(req, res) {
  try {
    const { accessToken } = authService.refreshAccessToken(req.body.refreshToken);
    res.json({ accessToken });
  } catch (err) {
    res.status(403).json({ error: err.message });
  }
}
