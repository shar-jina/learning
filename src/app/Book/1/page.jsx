import BookFlip from "@/app/Component/Bookflip";


export default function BookDetailPage() {
  return (
    <section className="min-h-screen bg-purple-50 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-600 mb-12">
          Book Preview
        </h1>

        <BookFlip />
      </div>
    </section>
  );
}
