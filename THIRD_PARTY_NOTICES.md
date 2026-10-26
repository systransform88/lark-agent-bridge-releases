# Third-party components

The bridge and its third-party dependencies have separate licences. This list identifies the principal distributed components; it is not a replacement for their full notices or a legal clearance for a release.

| Component | Purpose | Main package licence |
| --- | --- | --- |
| Electron | Desktop runtime | MIT; Chromium and other bundled components retain their notices |
| Node.js (Linux installer) | Standalone bridge runtime for native PDF compatibility | MIT; complete bundled Node notices are in runtime/NODE_LICENSE |
| @larksuite/cli | Lark commands and event listener | MIT |
| pdfjs-dist | PDF parsing, text extraction and rendering commands | Apache-2.0 |
| @napi-rs/canvas | Native canvas used to render PDF pages | MIT; bundled native components have additional licences |
| Phosphor Icons | Desktop interface icons | MIT; notice included in ui/assets/icons/LICENSE |
| yauzl | Bounded ZIP archive reading | MIT; licence retained in the package |

PDF.js is unmodified. Its `LICENSE`, CMap, ICC profile, standard-font and WebAssembly codec licence files remain in the distributed package. In particular, its bundled Liberation fonts carry GPLv2 with font-specific exceptions; the Foxit fonts and several codecs carry their own permissive notices. The main PDF.js Apache licence does not replace those component licences.

The canvas package's `LICENSE` and platform package's `sbom.cdx.json` remain bundled. The SBOM identifies native dependencies, including components under MPL-2.0, FreeType, Unicode, BSD and other licences. Preserve these notices and review applicable component source-availability requirements before distributing a proprietary installer. No third-party native code or fonts are modified by this bridge.

MuPDF is no longer a dependency of this version. Older release artifacts containing MuPDF retain their original obligations. Starting with desktop v0.2.0-alpha.2, the project's own code is distributed under the proprietary terms in `LICENSE`. This does not replace the third-party licences above or revoke rights accompanying earlier releases.

Upstream sources:

- https://github.com/mozilla/pdf.js
- https://github.com/Brooooooklyn/canvas
- https://github.com/larksuite/cli
- https://github.com/electron/electron
