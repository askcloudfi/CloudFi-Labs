import { Request, Response } from 'express';

export const healthController = {
  getHealth: (req: Request, res: Response): void => {
    res.status(200).json({
      status: 'OK',
      message: 'CloudFi Labs API is running smoothly',
      timestamp: new Date().toISOString(),
    });
  },

  getDetailedHealth: (req: Request, res: Response): void => {
    const uptime = process.uptime();
    const memoryUsage = process.memoryUsage();

    res.status(200).json({
      status: 'OK',
      timestamp: new Date().toISOString(),
      uptime: {
        seconds: Math.floor(uptime),
        human: `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`,
      },
      memory: {
        rss: `${Math.round(memoryUsage.rss / 1024 / 1024)}MB`,
        heapTotal: `${Math.round(memoryUsage.heapTotal / 1024 / 1024)}MB`,
        heapUsed: `${Math.round(memoryUsage.heapUsed / 1024 / 1024)}MB`,
        external: `${Math.round(memoryUsage.external / 1024 / 1024)}MB`,
      },
      environment: process.env.NODE_ENV || 'development',
      version: process.env.npm_package_version || '1.0.0',
      platform: process.platform,
      nodeVersion: process.version,
    });
  },
};