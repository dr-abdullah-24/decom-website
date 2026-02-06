import { useState, useEffect } from "react";
import { Play, X, Calendar, Mail, Building, MessageSquare, ChevronRight, Sparkles, Zap } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  description?: string;
  duration?: string;
}

function ProductDemoPage() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState("voice-agents");
  const [isLoading, setIsLoading] = useState(true);

  // YouTube API configuration
  const YOUTUBE_API_KEY = "AIzaSyA-afkItX4VRl1quQrmbMqPjfNQLO5P2_w";
  const PLAYLIST_ID = "PLt1vXlDNqYixUFAAdqh1DXbfWII-u6MAC";

  // Fetch videos from YouTube playlist
  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      try {
        setIsLoading(true);
        const playlistResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${YOUTUBE_API_KEY}`
        );
        if (!playlistResponse.ok) throw new Error("Failed to fetch playlist");
        const playlistData = await playlistResponse.json();
        const videoIds = playlistData.items.map((item: any) => item.snippet.resourceId.videoId).join(",");
        const videosResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoIds}&key=${YOUTUBE_API_KEY}`
        );
        if (!videosResponse.ok) throw new Error("Failed to fetch video details");
        const videosData = await videosResponse.json();
        const durationMap = videosData.items.reduce((acc: any, video: any) => {
          acc[video.id] = formatDuration(video.contentDetails.duration);
          return acc;
        }, {});
        const transformedVideos: VideoItem[] = playlistData.items.map((item: any) => {
          const videoId = item.snippet.resourceId.videoId;
          return {
            id: videoId,
            title: item.snippet.title,
            thumbnail:
              item.snippet.thumbnails.high?.url ||
              item.snippet.thumbnails.medium?.url ||
              item.snippet.thumbnails.default.url,
            url: `https://www.youtube.com/embed/${videoId}`,
            description: item.snippet.description || "No description available",
            duration: durationMap[videoId] || "N/A",
          };
        });
        setVideos(transformedVideos);
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
        setVideos([
          {
            id: "1",
            title: "API Error - Using Demo Data",
            thumbnail:
              "https://images.unsplash.com/photo-1676299081847-824916de030a?w=400&h=225&fit=crop",
            url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Please check your YouTube API key and playlist ID",
            duration: "0:00",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchYouTubeVideos();
  }, []);

  const formatDuration = (duration: string): string => {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return "0:00";
    const hours = parseInt(match[1] || "0");
    const minutes = parseInt(match[2] || "0");
    const seconds = parseInt(match[3] || "0");
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    } else {
      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <div className="pt-20">
        <section className="relative py-12 text-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-purple-300 mb-6">
              <Sparkles className="w-4 h-4" />
              Next-Generation AI Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              AI Product Demos
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Experience the future of AI technology. Discover how our cutting-edge AI agents can
              revolutionize your operations and enhance customer experiences.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg font-semibold text-lg"
            >
              <Calendar className="w-5 h-5" />
              Request Demo
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Tabs + Videos */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="flex gap-4 border-b border-white/20 mb-8">
            <button
              className={`group pb-4 px-6 relative ${
                activeTab === "voice-agents" ? "text-white font-semibold" : "text-gray-400"
              }`}
              onClick={() => setActiveTab("voice-agents")}
            >
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Voice Agents
              </div>
              {activeTab === "voice-agents" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              )}
            </button>
          </div>

          {activeTab === "voice-agents" && (
            <div className="space-y-8">
              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-white/5 rounded-2xl animate-pulse">
                      <div className="aspect-video bg-gray-700"></div>
                      <div className="p-6 space-y-3">
                        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-700 rounded w-full"></div>
                        <div className="h-3 bg-gray-700 rounded w-2/3"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videos.map((video, index) => (
                    <div
                      key={video.id}
                      className="group bg-white/5 rounded-2xl overflow-hidden hover:scale-105 transition-all border border-white/10 hover:border-purple-500/50 cursor-pointer"
                      onClick={() => setSelectedVideo(video.url)}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative aspect-video">
                        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                        </div>
                        <div className="absolute top-4 right-4 px-2 py-1 bg-black/60 rounded-lg text-xs">
                          {video.duration}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                        <p className="text-gray-400 text-sm">{video.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-black/80 rounded-2xl max-w-5xl w-full relative border border-white/20 overflow-hidden">
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={selectedVideo}
                title="Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Request Demo Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-black/80 rounded-2xl max-w-md w-full relative border border-white/20 p-8">
            <button
              className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center"
              onClick={() => setShowForm(false)}
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Request a Free Demo
              </h2>
              <p className="text-gray-400 text-sm">Let us show you how AI can transform your business</p>
            </div>

            {/* 🔹 FormSubmit.co Form */}
            <form
              action="https://formsubmit.co/aliikram97@gmail.com"
              method="POST"
              className="space-y-4"
            >
              {/* hidden config */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Demo Request" />

                    <input
            type="text"
            name="_honey"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
        />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white"
                required
              />

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-4 pl-12 bg-white/5 border border-white/10 rounded-xl text-white"
                  required
                />
              </div>

              <div className="relative">
                <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="w-full p-4 pl-12 bg-white/5 border border-white/10 rounded-xl text-white"
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-400" />
                <textarea
                  name="message"
                  placeholder="Tell us about your business needs..."
                  rows={3}
                  className="w-full p-4 pl-12 bg-white/5 border border-white/10 rounded-xl text-white resize-none"
                ></textarea>
              </div>

             <select
  name="service"
  className="w-full p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl 
             text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none 
             focus:ring-2 focus:ring-purple-500/20 transition-colors"
>
  <option value="" className="text-black">Select Service Interest</option>
  <option value="voice-agents" className="text-black">Voice AI Agents</option>
  <option value="custom-ai" className="text-black">Custom AI Applications</option>
  <option value="automation" className="text-black">Workflow Automation</option>
  <option value="integration" className="text-black">AI Integration</option>
</select>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:scale-105 transition-all shadow-lg font-semibold flex items-center justify-center gap-2 group"
              >
                Schedule Demo
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export { ProductDemoPage };
export default ProductDemoPage;
