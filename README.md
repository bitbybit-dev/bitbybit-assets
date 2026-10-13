# bitbybit-assets
Public Assets of Bit by bit developers platform. The Bitbybit CDN serves them by version, at
`https://git-cdn.bitbybit.dev/v<version>/<path>`, from this repository's tag `v<version>`.

## Licensing

- **Runner files** (`runner/`, `workers/`) and company assets (`assets/`, `textures/`): the
  [Bitbybit Runner License](LICENSE) - free to use, embed and self-host, including commercially.
- **Bitbybit OCCT Kernel** (`wasm/bitbybit-dev-occt*.wasm`): the MIT License
  (`wasm/bitbybit-dev-occt.LICENSE.txt`), closed source - the C++ of its kernel layer is not
  published. It contains OpenCASCADE Technology, licensed under LGPL-2.1 with the Open CASCADE
  exception; `wasm/bitbybit-dev-occt.NOTICE.txt` lists everything compiled into it.
- **Relinking kits**: the materials to relink each build of the Bitbybit OCCT Kernel with a modified
  OCCT are published free of charge as the releases `relink-kit-<kernel file name without .wasm>` of
  this repository. For a build whose kit is not there, of this or of an earlier version, write to
  info@bitbybit.dev.
- **Third-party files** (`babylonjs/`, `fonts/`, `wasm/manifold-*.wasm`): their own licenses,
  listed in [NOTICE](NOTICE).
- **Schemas** (`schemas/`): the MIT License, copied from the `@bitbybit-dev/occt` package.

Each tag carries the license files of its version.
