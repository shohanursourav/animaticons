#!/usr/bin/env python3
"""Static dev server for Animaticons with caching disabled.

Browsers heuristic-cache plain <script>/<link> files, which can leave the
site running an old icons-data.js long after an update. Every response here
sends Cache-Control: no-store so a normal reload always shows current files.

Usage: python3 scripts/serve.py [port]   (default 4173)
"""
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class NoStoreHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def log_message(self, fmt, *args):  # quieter logs
        sys.stderr.write("%s - %s\n" % (self.address_string(), fmt % args))


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 4173
    server = ThreadingHTTPServer(("0.0.0.0", port), NoStoreHandler)
    print(f"Animaticons dev server on http://0.0.0.0:{port} (cache disabled)")
    server.serve_forever()


if __name__ == "__main__":
    main()
