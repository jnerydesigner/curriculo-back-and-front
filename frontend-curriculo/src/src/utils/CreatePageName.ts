export const createPageName = (routeName: string) => {
  switch (routeName) {
    case "experience":
      return "Experiência";
      break;
    case "stage":
      return "Estágios";
      break;
    case "formation":
      return "Formação";
      break;
    case "portfolio":
      return "Portfolio";
      break;
    default:
      return "Perfil";
  }
};
