export const createPageName = (routeName: string) => {
  switch (routeName) {
    case "experience":
      return "Experiência";
    case "stage":
      return "Estágios";
    case "formation":
      return "Formação";
    case "portfolio":
      return "Portfolio";
    default:
      return "Perfil";
  }
};
