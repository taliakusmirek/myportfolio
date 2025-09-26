import React from "react";

// Minimal no-op Atmosphere. We are not using the 3D scene right now, so keep this
// lightweight and free of @react-three/fiber/three dependencies to prevent build errors.
export function Atmosphere() {
  return null;
}
