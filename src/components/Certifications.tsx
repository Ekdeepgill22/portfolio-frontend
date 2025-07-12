import { useState, useEffect } from 'react';
import { Award, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { PhotoProvider } from 'react-photo-view';
import { toast } from 'react-hot-toast';

interface CertificationGroup {
  title: string;
  issuer: string;
  year: string;
  images: { url: string; alt: string }[];
}

const groupMeta: Record<string, { title: string; issuer: string; year: string }> = {
  python: { title: 'Python Foundation Certification', issuer: 'Infosys Springboard', year: '2023' },
  web: { title: 'Angular and React Certification', issuer: 'Infosys Springboard', year: '2024' },
  ai: { title: 'Artificial Intelligence Certification', issuer: 'Infosys Springboard', year: '2025' },
  agentic: { title: 'Agentic AI With Python', issuer: 'Auribises Technologies', year: '2025' },
  deloitte: { title: 'Technology Job Simulation', issuer: 'Deloitte', year: '2025' },
  genai: { title: 'Generative AI Certification', issuer: 'Coursera, Udemy, Infosys Springboard', year: '2025' },
};

const getGroupKey = (filename: string) => {
  if (filename.startsWith('pyf')) return 'python';
  if (filename.startsWith('ang') || filename.startsWith('react')) return 'web';
  if (filename.startsWith('ai')) return 'ai';
  if (filename.startsWith('agentic')) return 'agentic';
  if (filename.startsWith('deloitte')) return 'deloitte';
  if (filename.startsWith('genai')) return 'genai';
  return 'other';
};

const Certifications = () => {
  const [selectedGroup, setSelectedGroup] = useState<CertificationGroup | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [groups, setGroups] = useState<CertificationGroup[]>([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchCerts = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${baseUrl}/api/v1/certifications`);
        if (!res.ok) throw new Error('Failed to fetch certifications');
        const data = await res.json();
        const certs = (data.certifications || []);
        const grouped: Record<string, CertificationGroup> = {};
        certs.forEach((cert: any) => {
          const groupKey = getGroupKey(cert.filename);
          const meta = groupMeta[groupKey];
          if (!grouped[groupKey]) {
            grouped[groupKey] = {
              title: meta?.title || groupKey,
              issuer: meta?.issuer || '',
              year: meta?.year || '',
              images: [],
            };
          }
          // Always use the full backend URL for images
          let imageUrl = cert.url;
          if (!imageUrl.startsWith('http')) {
            imageUrl = `${baseUrl}/static/certifications/${cert.filename}`;
          }
          grouped[groupKey].images.push({ url: imageUrl, alt: cert.filename });
        });
        setGroups(Object.values(grouped));
      } catch (err) {
        toast.error('Failed to load certifications.');
      } finally {
        setLoading(false);
      }
    };
    fetchCerts();
  }, []);

  useEffect(() => {
    if (selectedGroup) {
      const handleScroll = (e: Event) => e.preventDefault();
      document.body.style.overflow = 'hidden';
      window.addEventListener('scroll', handleScroll, { passive: false });
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [selectedGroup]);

  const openLightbox = (group: CertificationGroup, idx: number) => {
    setSelectedGroup(group);
    setCurrentImageIndex(idx);
  };

  const closeLightbox = () => {
    setSelectedGroup(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedGroup && currentImageIndex < selectedGroup.images.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600">
            Professional certifications and achievements that validate my expertise
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <PhotoProvider>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groups.map((group, groupIdx) => (
                <div key={groupIdx} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    {group.images[0] && (
                      <img
                        src={group.images[0].url}
                        alt={group.images[0].alt}
                        className="w-full h-48 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-110"
                        onClick={() => openLightbox(group, 0)}
                      />
                    )}
                    <div
                      className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 cursor-pointer flex items-center justify-center"
                      onClick={() => openLightbox(group, 0)}
                    >
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white rounded-full p-3 shadow-lg">
                          <ExternalLink className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                    </div>
                    {group.images.length > 1 && (
                      <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        +{group.images.length - 1}
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">
                          {group.title}
                        </h3>
                        <p className="text-gray-600 text-sm font-medium">{group.issuer}</p>
                        {group.year && (
                          <p className="text-gray-500 text-xs mt-1">{group.year}</p>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => openLightbox(group, 0)}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>View Certificates</span>
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </PhotoProvider>
        )}

        {selectedGroup && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            autoFocus
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
              >
                <X className="h-8 w-8" />
              </button>

              <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={selectedGroup.images[currentImageIndex].url}
                  alt={selectedGroup.images[currentImageIndex].alt}
                  style={{
                    maxWidth: '90vw',
                    maxHeight: '80vh',
                    display: 'block',
                    margin: '0 auto',
                    objectFit: 'contain',
                    background: '#fff',
                  }}
                  onClick={e => e.stopPropagation()}
                />

                {selectedGroup.images.length > 1 && (
                  <>
                    <button
                      onClick={e => { e.stopPropagation(); prevImage(); }}
                      disabled={currentImageIndex === 0}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={e => { e.stopPropagation(); nextImage(); }}
                      disabled={currentImageIndex === selectedGroup.images.length - 1}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {selectedGroup.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {selectedGroup.images.length}
                  </div>
                )}
              </div>

              <div className="mt-4 text-center text-white">
                <h3 className="text-xl font-bold mb-1">{selectedGroup.title}</h3>
                <p className="text-gray-300">{selectedGroup.issuer}</p>
                {selectedGroup.year && (
                  <p className="text-gray-400 text-sm mt-1">{selectedGroup.year}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
