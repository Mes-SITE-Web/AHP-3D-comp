import { motion } from "framer-motion"; // Importation de la bibliothèque pour les animations
import { useState } from "react"; // Importation de useState pour gérer l'état local
import { projects } from "../data/projects"; // Importation des données des projets
import { ImageModal } from "./ImageModal"; // Importation du composant modal pour afficher les images

// Fonction principale de la galerie
export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null); // État pour gérer l'image sélectionnée

  return (
    <section className="py-20 bg-black">
      {" "}
      {/* Section principale avec style */}
      <div className="container mx-auto px-20">
          {/* Conteneur pour centrer le contenu */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto"> {/* Grille responsive pour les images */}
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-64 h-80 group relative overflow-hidden rounded cursor-pointer"
                onClick={() =>
                  setSelectedImage({
                    src: project.thumbnail,
                    alt: project.title,
                  })
                }
              >
                <img
                  src={project.thumbnail} // Affichage de l'image
                  alt={project.title} // Texte alternatif
                  className="w-64 h-80 object-cover transition-transform duration-300 group-hover:scale-110" // Largeur fixe et hauteur pour portrait
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {" "}
                  {/* Effet de superposition */}
                  <div className="absolute bottom-0 p-6 w-full">
                    {" "}
                    {/* Conteneur pour le texte */}
                    <h3 className="text-xl font-bold text-white mb-2">
                      {" "}
                      {/* Titre du projet */}
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {" "}
                      {/* Description du projet */}
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      <ImageModal // Composant modal pour afficher l'image sélectionnée
        isOpen={!!selectedImage} // Vérifie si une image est sélectionnée
        onClose={() => setSelectedImage(null)} // Fonction pour fermer le modal
        image={selectedImage || { src: "", alt: "" }} // Image à afficher dans le modal
      />
    </section>
  );
}
