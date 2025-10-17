const newsContainer = document.getElementById("dv_content_card");

const newsData = {
  status: "ok",
  totalResults: 5,
  articles: [
    {
      source: { id: "kompas", name: "Kompas" },
      author: "Rina Saputra",
      title: "Pemerintah Umumkan Kebijakan Energi Baru untuk 2026",
      description:
        "Pemerintah meluncurkan paket kebijakan energi yang menargetkan peningkatan kapasitas energi terbarukan.",
      url: "https://www.kompas.com/energi-kebijakan-2026",
      urlToImage: "https://images.kompas.com/2025/10/17/energi2026.jpg",
      publishedAt: "2025-10-17T08:30:00+07:00",
      content: "Paket kebijakan tersebut mencakup insentif fiskal...",
    },
    {
      source: { id: "detik", name: "Detik" },
      author: "Irfan Hidayat",
      title: "Startup Lokal Raih Pendanaan Seri B senilai $25 juta",
      description:
        "Perusahaan teknologi asal Bandung berhasil mendapat investasi dari konsorsium investor regional.",
      url: "https://www.detik.com/startup-pendanaan-seri-b",
      urlToImage: "https://d2.detik.net.id/images/startup-b.jpg",
      publishedAt: "2025-10-16T19:45:00+07:00",
      content:
        "Dengan pendanaan ini, startup berencana ekspansi ke 3 pasar ASEAN...",
    },
    {
      source: { id: null, name: "The Jakarta Post" },
      author: "Alex Tan",
      title:
        "Inflasi Stabil di Bawah Target, Bank Sentral Pertahankan Suku Bunga",
      description:
        "Bank Sentral memutuskan mempertahankan suku bunga acuan pada rapat komite moneter terbaru.",
      url: "https://www.thejakartapost.com/finance/inflasi-stabil",
      urlToImage: "https://static.thejakartapost.com/images/bsb.jpg",
      publishedAt: "2025-10-15T14:00:00+07:00",
      content:
        "Komite menilai inflasi inti tetap terkendali sehingga kebijakan moneter saat ini dianggap tepat...",
    },
    {
      source: { id: "bbc", name: "BBC News" },
      author: "Siti Noor",
      title: "Kemajuan Teknologi AI dan Dampaknya pada Dunia Kerja",
      description:
        "Laporan baru menyoroti bagaimana otomasi dan AI mengubah profil pekerjaan di sektor manufaktur dan jasa.",
      url: "https://www.bbc.co.uk/news/technology-ai-dunia-kerja",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/ai-work.jpg",
      publishedAt: "2025-10-14T10:20:00Z",
      content:
        "Analisis menunjukkan kebutuhan besar untuk reskilling bagi pekerja terdampak...",
    },
    {
      source: { id: "cnn", name: "CNN International" },
      author: "Maya S.",
      title:
        "Cuaca Ekstrem Meningkat: Negara-negara Percepat Investasi Infrastruktur",
      description:
        "Beberapa negara mempercepat pembangunan infrastruktur tahan bencana setelah rentetan banjir dan badai.",
      url: "https://www.cnn.com/climate/infrastructure-adaptation",
      urlToImage: "https://cdn.cnn.com/weather/infrastructure.jpg",
      publishedAt: "2025-10-13T06:00:00Z",
      content:
        "Pembangunan tanggul, kanal drainase baru, dan sistem peringatan dini menjadi prioritas...",
    },
  ],
};

newsData.articles.forEach((article) => {
  const card = `
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4" style="margin-top: 10px; margin-bottom: 10px;">
                <div class="card rounded-0 p-0 shadow-sm">
                    <img src="${article.urlToImage}" 
                        class="card-img-top rounded-0" style="height: 15rem;">
                    <div class="card-body text-center">
                        <h6 title="${
                          article.description
                        }" class="card-title" style="cursor: pointer;">
                        ${article.title.substring(1, 30) + "..."}</h6>
                        <hr />
                        <a href="https://github.com/azouaoui-med/angular-pro-sidebar" target="_blank" class="btn btn-danger btn-sm">Hapus</a>
                        <a href="${
                          article.url
                        }" target="_blank" class="btn btn-success btn-sm">Detail</a>
                    </div>                    
                </div>
                
            </div>
            `;

  newsContainer.innerHTML += card;
});
