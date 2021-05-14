export interface ViewMovie {
  created: string;
  edited: string;
  url: string;
  date: string;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  id: number;
  rating: number;
  
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];

  charactersList: People[];
  planetsList: Planet[];
  starshipsList: Starship[];
  vehiclesList: Vehicle[];
  speciesList: Species[];
}

export interface People {
  created: string;
  edited: string;
  url: string;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  
  films: string[];
  species: string[];
  vehicles: Vehicle[];
  starships: string[];
  
  

}

export interface Planet {
  created: string;
  edited: string;
  url: string;
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  
  residents: string[];
  films: string[];
  

}

export interface Starship {
  created: string;
  edited: string;
  url: string;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  consumables: string;
  hyperdrive_rating: string;
  mglt: string;
  starship_class: string;
  
  pilots: string[];
  films: string[];
  

}

export interface Vehicle {
  created: string;
  edited: string;
  url: string;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  
  pilots: string[];
  films: string[];
  

}

export interface Species {
  created: string;
  edited: string;
  url: string;
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
 
  
  people: string[];
  films: string[];
  

}