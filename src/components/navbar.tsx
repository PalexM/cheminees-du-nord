import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
  FireIcon,
  WrenchScrewdriverIcon,
  PaintBrushIcon,
  HomeModernIcon
} from "@heroicons/react/24/solid";
import { url } from "inspector";

const navListMenuItems = [
  {
    title: "Poêles et Cheminées",
    description: "Installation de Poêles et Cheminées de Qualité",
    icon: WrenchScrewdriverIcon,
    url: "/installations"
  },
  {
    title: "Conduits",
    description: "Création de Conduits sur Mesure",
    icon: FireIcon,
    url: "/conduits"
  },
  {
    title: "Nettoyage et Entretien",
    description: "Nettoyage et Entretien de Conduits et Cheminées",
    icon: PaintBrushIcon,
    url: "/entretien"
  },
  {
    title: "Réparation de Poêles",
    description: "Entretien et Réparation de Poêles pour une Performance Durable",
    icon: SunIcon,
    url: "/reparation"
  },
  {
    title: "Réfection Murs et Plafonds",
    description: "Réfection Expert des Murs et des Plafonds pour un Intérieur Parfaitement Coordonné",
    icon: HomeModernIcon,
    url: "/refection"
  },
];

function MenuItem2(props: any) {
  return (
    <MenuItem {...props} />
  );
}

function Typography2(props: any) {
  return (
    <Typography {...props} />
  );
}

function ListItem2(props: any) {
  return (
    <ListItem {...props} />
  );
}

function MenuList2(props: any) {
  return (
    <MenuList {...props} />
  );
}


function List2(props: any) {
  return (
    <List {...props} />
  );
}


function Navbar2(props: any) {

  return (
    <Navbar {...props} />
  );
}

function IconButton2(props: any) {
  return (
    <IconButton {...props} />
  );
}




function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(({ icon, title, description, url }, key) => (
    <a href={url} key={key}>
      <MenuItem2 className="flex items-center gap-3 rounded-lg">
        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
          {React.createElement(icon, {
            strokeWidth: 2,
            className: "h-6 text-gray-900 w-6",
          })}
        </div>
        <div>
          <Typography2
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold hover:text-red-500"
          >
            {title}
          </Typography2>
          <Typography2
            variant="paragraph"
            className="text-xs !font-medium text-blue-gray-500"
          >
            {description}
          </Typography2>
        </div>
      </MenuItem2>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography2 as="div" variant="large" className="font-medium ">
            <ListItem2
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Nos Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItem2>
          </Typography2>
        </MenuHandler>
        <MenuList2 className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList2>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List2 className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography2
        as="a"
        href="/"
        variant="large"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem2 className="flex items-center gap-2 py-2 pr-4">Accueil</ListItem2>
      </Typography2>
      <NavListMenu />
      <Typography2
        as="a"
        href="realisations"
        variant="large"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem2 className="flex items-center gap-2 py-2 pr-4">Nos Ralisations</ListItem2>
      </Typography2>
      <Typography2
        as="a"
        href="#"
        variant="large"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem2 className="flex items-center gap-2 py-2 pr-4">Contactez-Nous</ListItem2>
      </Typography2>
    </List2>
  );
}

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar2 className="h-max max-w-full px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/image/logo_firma.png" className="h-24" alt="Cheminnee du Nord" />
          <span className="self-center text-xl lg:text-2xl font-semibold whitespace-nowrap dark:text-white" style={{ marginLeft: "-20px" }}>Cheminées du Nord</span>
        </a>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton2
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton2>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar2>
  );
}
