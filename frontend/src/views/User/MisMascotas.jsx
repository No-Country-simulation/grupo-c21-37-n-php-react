import { useState } from 'react';
import Mascota1 from "/img/mascota1.jpg";
import Mascota2 from "/img/mascota2.jpg";
import Mascota3 from "/img/mascota3.jpg";
import { useAuth } from "../../hooks/useAuth";

export default function MisMascotas() {
  const [mainImage, setMainImage] = useState(Mascota1); // Cambiado para usar Mascota1 como valor inicial

  const handleThumbnailClick = (image) => {
    setMainImage(image); // Actualiza la imagen principal al hacer clic en una miniatura
  };
  const { user, error } = useAuth({middleware: 'auth'})

  console.log(user)
  console.log(error)


  return (
    <div className="mis-mascotas-container mt-5 row">
      <header className="header">
      <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5001 8.49998H5.74509L13.0651 2.51088C13.6501 2.03225 13.6501 1.24679 13.0651 0.768157C12.4801 0.289521 11.5351 0.289521 10.9501 0.768157L1.06509 8.85588C0.480093 9.33452 0.480093 10.1077 1.06509 10.5863L10.9501 18.6741C11.5351 19.1527 12.4801 19.1527 13.0651 18.6741C13.6501 18.1954 13.6501 17.4222 13.0651 16.9436L5.74509 10.9545H22.5001C23.3251 10.9545 24.0001 10.4022 24.0001 9.72725C24.0001 9.05225 23.3251 8.49998 22.5001 8.49998Z" fill="#4D4D4D"/>
</svg>

        <h2>Mascota Perdida</h2>
      </header>

      <div className="content mt-5">
        {/* Sección de imágenes */}
        <div className="image-gallery">
          <div className="main-image">
            <img src={mainImage} alt="Mascota perdida" /> {/* Usa mainImage */}
          </div>
          <div className="thumbnail-gallery">
            {/* Thumbnails */}
            <img src={Mascota1} alt="Thumbnail 1" onClick={() => handleThumbnailClick(Mascota1)} />
            <img src={Mascota2} alt="Thumbnail 2" onClick={() => handleThumbnailClick(Mascota2)} />
            <img src={Mascota3} alt="Thumbnail 3" onClick={() => handleThumbnailClick(Mascota3)} />
          </div>
          <div className="action-buttons">
            <button className="contact-owner">Contactar al Dueño</button>
          </div>
        </div>

        {/* Sección de detalles */}
        <div className="details">
          <div className="header-details">
            <div className="user-info">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--primario)">
                <path fill="var(--primario)" d="M7.25 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0m-5 16c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75" />
              </svg>
              <p className="username">Usuario</p>
            </div>
            <p className="date">Fecha de publicación: 20 Mayo 2024</p>
          </div>

          <h3>Firulais</h3>
          <div className="details-info">
            <p><strong>Edad:</strong> Cachorro</p>
            <p><strong>Color:</strong> Marrón y Blanco</p>
            <p><strong>Sexo:</strong> Macho</p>
            <p><strong>Raza:</strong> Criolla</p>
            <p><strong>Ubicación:</strong> Narnia</p>
            <p><strong>Microchip:</strong> XXXXXX259</p>
            <p><strong>Castrado:</strong> Sí</p>
            <p><strong className="color">Fecha de pérdida:</strong> 20 Mayo 2024</p>
          </div>
          <p className="description">Tiene una patita blanca</p>

          {/* Botones de acción */}
          <div className="action-buttons">
            <button className="provide-info">Aportar Información</button>
            <button className="view-last-location"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_584_435)">
                <path d="M6.38695 1.97044C6.07344 1.97023 5.76295 2.03182 5.47326 2.1517C5.18356 2.27158 4.92034 2.4474 4.69865 2.66909C4.47696 2.89078 4.30115 3.154 4.18127 3.44369C4.06139 3.73339 3.99979 4.04387 4 4.35739C4 6.1472 6.38695 8.78984 6.38695 8.78984C6.38695 8.78984 8.77391 6.1472 8.77391 4.35739C8.77412 4.04387 8.71252 3.73339 8.59264 3.44369C8.47276 3.154 8.29695 2.89078 8.07525 2.66909C7.85356 2.4474 7.59034 2.27158 7.30065 2.1517C7.01096 2.03182 6.70047 1.97023 6.38695 1.97044ZM6.38695 5.20941C6.21844 5.20941 6.05371 5.15944 5.91359 5.06582C5.77348 4.9722 5.66427 4.83913 5.59978 4.68345C5.5353 4.52776 5.51842 4.35644 5.5513 4.19117C5.58418 4.02589 5.66532 3.87407 5.78448 3.75492C5.90364 3.63576 6.05546 3.55461 6.22073 3.52174C6.38601 3.48886 6.55732 3.50573 6.71301 3.57022C6.8687 3.63471 7.00177 3.74391 7.09539 3.88403C7.18901 4.02414 7.23898 4.18887 7.23898 4.35739C7.23877 4.5833 7.14893 4.79989 6.98919 4.95963C6.82945 5.11937 6.61286 5.2092 6.38695 5.20941ZM18.4163 7.41602V3.96945C18.4103 3.60755 18.3553 3.24814 18.2528 2.90101C17.9898 1.98352 17.4077 1.19013 16.6115 0.663833C15.8153 0.137534 14.8573 -0.0870665 13.9101 0.0305084C12.9629 0.148083 12.0889 0.600101 11.4455 1.3051C10.8021 2.0101 10.4317 2.92172 10.401 3.87567V4.07445L10.393 4.77178V12.7486H10.3898V12.7815C10.3898 13.2066 10.2209 13.6144 9.92026 13.915C9.61963 14.2156 9.21189 14.3845 8.78673 14.3845C8.36157 14.3845 7.95383 14.2156 7.6532 13.915C7.35257 13.6144 7.18367 13.2066 7.18367 12.7815L7.18688 12.7518H7.18367V11.1944H5.58062V12.7975H5.58222C5.58275 13.6474 5.92088 14.4622 6.52222 15.0628C7.12355 15.6634 7.93885 16.0005 8.78873 16C9.63862 15.9995 10.4535 15.6613 11.0541 15.06C11.6547 14.4587 11.9918 13.6434 11.9912 12.7935H11.9928V12.0064H11.9969V5.57331L12.0049 4.07445V3.87647C12.0277 3.24548 12.2978 2.64877 12.7567 2.21512C13.2157 1.78148 13.8267 1.54569 14.458 1.55863C15.0893 1.57157 15.6901 1.83221 16.1309 2.2843C16.5717 2.73638 16.8171 3.34366 16.814 3.97506V7.4016C16.5071 7.57527 16.266 7.84536 16.1282 8.16999C15.9904 8.49462 15.9636 8.85564 16.0518 9.19709C16.1401 9.53854 16.3385 9.84132 16.6164 10.0585C16.8943 10.2757 17.236 10.3951 17.5887 10.3983C17.9413 10.4015 18.2852 10.2882 18.5669 10.0761C18.8486 9.86391 19.0525 9.56475 19.1469 9.22495C19.2413 8.88514 19.2209 8.52369 19.089 8.19664C18.957 7.86958 18.7201 7.59519 18.4163 7.41602Z" fill="white" />
                <path d="M17.314 3.97621C17.3174 3.21401 17.0211 2.481 16.4889 1.93524C15.9565 1.38918 15.2307 1.07437 14.4682 1.05874C13.7057 1.0431 12.9677 1.32791 12.4133 1.85169C11.859 2.37547 11.5328 3.09622 11.5052 3.85838L11.5049 3.86742V3.87647V4.07311V4.07445L11.4969 5.57063H11.4969V5.57331V11.5064H11.4928V12.0064V12.2935H11.4909L11.4912 12.7938C11.4917 13.5111 11.2072 14.1992 10.7003 14.7067C10.1934 15.2142 9.5057 15.4995 8.78842 15.5C8.07114 15.5004 7.38306 15.2159 6.87555 14.7091C6.36804 14.2022 6.08267 13.5145 6.08222 12.7972L6.08191 12.2975H6.08062V11.6944H6.68367V12.7518V12.7545V12.7815V13.2518H6.73694C6.8246 13.6338 7.01808 13.987 7.29964 14.2685C7.69404 14.6629 8.22897 14.8845 8.78673 14.8845C9.3445 14.8845 9.87942 14.6629 10.2738 14.2685C10.5562 13.9862 10.7499 13.6318 10.8373 13.2486H10.893V12.7486V4.77466L10.901 4.0802L10.901 4.0802V4.07445V3.88398C10.9296 3.05197 11.2535 2.25721 11.8148 1.64215C12.3779 1.02517 13.1428 0.629595 13.9717 0.5267C14.8006 0.423806 15.639 0.620362 16.3358 1.08095C17.0326 1.54153 17.542 2.23585 17.7721 3.03879L17.7721 3.03879L17.7733 3.04261C17.8626 3.34515 17.9107 3.65835 17.9163 3.97375V7.41602V7.7016L18.1623 7.84669C18.3718 7.97026 18.5347 8.15928 18.6253 8.3837C18.7161 8.6087 18.7301 8.85736 18.6651 9.09112C18.6002 9.32488 18.4599 9.53069 18.2661 9.67663C18.0723 9.82257 17.8358 9.90049 17.5932 9.89831C17.3506 9.89613 17.1155 9.81396 16.9243 9.66456C16.7331 9.51515 16.5966 9.30685 16.5359 9.07196C16.4752 8.83706 16.4937 8.5887 16.5885 8.36537C16.6833 8.14205 16.8491 7.95624 17.0603 7.83676L17.314 7.69317V7.4016V3.97621ZM17.314 3.97621C17.314 3.97663 17.314 3.97704 17.314 3.97746L16.8141 3.97506H17.314V3.97621ZM4.5 4.35739L4.5 4.35705C4.49983 4.10925 4.54852 3.86385 4.64327 3.63488C4.73802 3.40591 4.87698 3.19786 5.05221 3.02264C5.22743 2.84742 5.43547 2.70846 5.66444 2.61371C5.89341 2.51895 6.13882 2.47027 6.38662 2.47044L6.38729 2.47044C6.63509 2.47027 6.88049 2.51895 7.10946 2.61371C7.33843 2.70846 7.54648 2.84742 7.7217 3.02264C7.89692 3.19786 8.03588 3.40591 8.13064 3.63488C8.22539 3.86385 8.27407 4.10925 8.27391 4.35705V4.35739C8.27391 4.70366 8.1556 5.1298 7.94465 5.60059C7.73665 6.06484 7.45489 6.53693 7.16596 6.96513C6.88468 7.382 6.60245 7.74868 6.38695 8.01504C6.17145 7.74868 5.88923 7.382 5.60795 6.96513C5.31902 6.53693 5.03726 6.06484 4.82925 5.60059C4.61831 5.1298 4.5 4.70366 4.5 4.35739ZM6.38695 5.70941L6.38742 5.70941C6.74577 5.70908 7.08935 5.56657 7.34275 5.31318C7.59614 5.05979 7.73864 4.71621 7.73898 4.35786V4.35739C7.73898 4.08998 7.65968 3.82858 7.51112 3.60624C7.36256 3.3839 7.1514 3.21061 6.90435 3.10828C6.6573 3.00595 6.38545 2.97917 6.12319 3.03134C5.86092 3.08351 5.62001 3.21228 5.43093 3.40136C5.24184 3.59045 5.11308 3.83135 5.06091 4.09362C5.00874 4.35589 5.03551 4.62774 5.13785 4.87479C5.24018 5.12184 5.41347 5.33299 5.63581 5.48156C5.85815 5.63012 6.11955 5.70941 6.38695 5.70941Z" stroke="black" />
              </g>
              <defs>
                <filter id="filter0_d_584_435" x="0" y="0" width="23.2053" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_584_435" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_584_435" result="shape" />
                </filter>
              </defs>
            </svg>
              Ver Última Ubicación</button>
          </div>
        </div>
      </div>
    </div>
  );
}
