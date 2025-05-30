// Modifiez votre index.tsx comme suit
export * from "./hero";
// Ne pas exporter tout depuis layout et page pour éviter les conflits
// export * from "./layout"; 
// export * from "./page";
// Au lieu de cela, exportez les composants spécifiques sans les metadata
export { default as RootLayout } from "./layout";
export { default as Campaign } from "./page";
// export * from "./posts";
// export * from "./articles";


