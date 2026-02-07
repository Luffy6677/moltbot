#!/usr/bin/env node
// Wrapper script to set global proxy before starting gateway
import { ProxyAgent, setGlobalDispatcher } from 'undici';

const proxyUrl = process.env.https_proxy || process.env.http_proxy;
if (proxyUrl) {
  console.log('[proxy] Setting global dispatcher:', proxyUrl);
  setGlobalDispatcher(new ProxyAgent(proxyUrl));
}

// Import the CLI entry point
import './openclaw.mjs';
