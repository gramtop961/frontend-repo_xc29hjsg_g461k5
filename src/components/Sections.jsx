import React, { useState } from 'react';
import { Sprout, ShieldCheck, Recycle, ThermometerSun, Droplets, CloudRain, FlaskConical, Wheat } from 'lucide-react';

const Card = ({ title, icon: Icon, children, id }) => (
  <section id={id} className="scroll-mt-24">
    <div className="rounded-2xl bg-white shadow-sm border border-green-100 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
          <Icon className="h-6 w-6" />
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-green-800">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

const HomeSection = () => (
  <section id="home" className="scroll-mt-24">
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-50 via-yellow-50 to-white border border-green-100">
      <div className="p-8 sm:p-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-green-800">
          Farm Fusion Innovation
        </h1>
        <p className="mt-4 text-green-700 max-w-2xl">
          A modern toolkit for smarter, sustainable agriculture: recommend the right crop, detect plant diseases early, and adopt eco-friendly practices.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a href="#crop" className="group rounded-2xl bg-white border border-green-100 p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
                <Sprout className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-green-900">Crop Recommendation</h3>
                <p className="text-sm text-green-700/80">Find the best crops for your soil and weather.</p>
              </div>
            </div>
          </a>
          <a href="#disease" className="group rounded-2xl bg-white border border-green-100 p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-yellow-100 text-yellow-700 flex items-center justify-center">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-green-900">Disease Prediction</h3>
                <p className="text-sm text-green-700/80">Upload a leaf image to detect issues.</p>
              </div>
            </div>
          </a>
          <a href="#sustainable" className="group rounded-2xl bg-white border border-green-100 p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
                <Recycle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-green-900">Sustainable Farming</h3>
                <p className="text-sm text-green-700/80">Practical tips to grow greener.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const CropSection = () => {
  const [form, setForm] = useState({ N: '', P: '', K: '', temperature: '', humidity: '', ph: '', rainfall: '' });
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo results (wire to backend later)
    setResults([
      { crop_name: 'Wheat', confidence_percentage: 92, benefits: 'High yield, staple demand', reason: 'Matches soil pH and moderate rainfall.' },
      { crop_name: 'Maize', confidence_percentage: 88, benefits: 'Versatile and resilient', reason: 'Suitable NPK and temperature range.' },
      { crop_name: 'Paddy', confidence_percentage: 83, benefits: 'Strong market value', reason: 'High humidity and rainfall alignment.' },
    ]);
  };

  return (
    <Card id="crop" title="Crop Recommendation" icon={Sprout}>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="grid grid-cols-2 gap-3">
          <label className="text-sm text-green-700">N
            <input type="number" name="N" value={form.N} onChange={handleChange} className="mt-1 w-full rounded-lg border border-green-200 px-3 py-2 focus:ring-2 focus:ring-green-300 outline-none" required />
          </label>
          <label className="text-sm text-green-700">P
            <input type="number" name="P" value={form.P} onChange={handleChange} className="mt-1 w-full rounded-lg border border-green-200 px-3 py-2 focus:ring-2 focus:ring-green-300 outline-none" required />
          </label>
          <label className="text-sm text-green-700">K
            <input type="number" name="K" value={form.K} onChange={handleChange} className="mt-1 w-full rounded-lg border border-green-200 px-3 py-2 focus:ring-2 focus:ring-green-300 outline-none" required />
          </label>
          <label className="text-sm text-green-700 flex items-center gap-2">pH
            <FlaskConical className="h-4 w-4 text-green-600" />
            <input type="number" step="0.01" name="ph" value={form.ph} onChange={handleChange} className="mt-1 w-full rounded-lg border border-green-200 px-3 py-2 focus:ring-2 focus:ring-green-300 outline-none" required />
          </label>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <label className="text-sm text-green-700 flex items-center gap-2">Temp (°C)
            <ThermometerSun className="h-4 w-4 text-yellow-600" />
            <input type="number" step="0.1" name="temperature" value={form.temperature} onChange={handleChange} className="mt-1 w-full rounded-lg border border-green-200 px-3 py-2 focus:ring-2 focus:ring-green-300 outline-none" required />
          </label>
          <label className="text-sm text-green-700 flex items-center gap-2">Humidity (%)
            <Droplets className="h-4 w-4 text-green-600" />
            <input type="number" step="0.1" name="humidity" value={form.humidity} onChange={handleChange} className="mt-1 w-full rounded-lg border border-green-200 px-3 py-2 focus:ring-2 focus:ring-green-300 outline-none" required />
          </label>
          <label className="text-sm text-green-700 flex items-center gap-2">Rainfall (mm)
            <CloudRain className="h-4 w-4 text-blue-600" />
            <input type="number" step="0.1" name="rainfall" value={form.rainfall} onChange={handleChange} className="mt-1 w-full rounded-lg border border-green-200 px-3 py-2 focus:ring-2 focus:ring-green-300 outline-none" required />
          </label>
        </div>
        <div className="sm:col-span-2 flex items-center justify-between">
          <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-green-600 text-white px-5 py-2.5 hover:bg-green-700 shadow">
            <Wheat className="h-5 w-5" />
            Get Top 3 Crops
          </button>
          <p className="text-xs text-green-700/70">Demo only — wire to backend later.</p>
        </div>
      </form>

      {results.length > 0 && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {results.map((r, idx) => (
            <div key={idx} className="rounded-xl border border-green-100 bg-green-50 p-4 shadow-sm">
              <div className="text-sm text-green-700/70">#{idx + 1}</div>
              <div className="mt-1 text-lg font-semibold text-green-900">{r.crop_name}</div>
              <div className="text-sm text-green-800">Confidence: {r.confidence_percentage}%</div>
              <div className="mt-2 text-sm text-green-700"><span className="font-medium">Benefits:</span> {r.benefits}</div>
              <div className="text-sm text-green-700"><span className="font-medium">Reason:</span> {r.reason}</div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

const DiseaseSection = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);

  const handleFile = (e) => {
    const f = e.target.files?.[0];
    setFile(f || null);
    if (f) setPreview(URL.createObjectURL(f));
  };

  const handlePredict = () => {
    setResult({
      disease_name: 'Leaf Blight (demo)',
      confidence_percentage: 87,
      prevention_suggestion: 'Ensure proper spacing and apply recommended fungicide.'
    });
  };

  return (
    <Card id="disease" title="Disease Prediction" icon={ShieldCheck}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col items-center justify-center border-2 border-dashed border-green-200 rounded-2xl p-6 bg-green-50/40 cursor-pointer hover:border-green-300">
          <input type="file" accept="image/*" onChange={handleFile} className="hidden" />
          <div className="text-center text-green-700">
            {preview ? (
              <img src={preview} alt="preview" className="max-h-48 rounded-lg shadow" />
            ) : (
              <>
                <div className="text-sm">Upload a leaf image</div>
                <div className="text-xs text-green-700/70">PNG, JPG up to ~5MB</div>
              </>
            )}
          </div>
        </label>
        <div className="flex flex-col gap-3">
          <button onClick={handlePredict} disabled={!file} className="rounded-xl bg-green-600 text-white px-5 py-2.5 shadow hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed">Predict Disease</button>
          <p className="text-xs text-green-700/70">Demo only — wire to backend later.</p>
          {result && (
            <div className="rounded-xl border border-green-100 bg-white p-4 shadow-sm">
              <div className="text-lg font-semibold text-green-900">{result.disease_name}</div>
              <div className="text-sm text-green-800">Confidence: {result.confidence_percentage}%</div>
              <div className="mt-2 text-sm text-green-700"><span className="font-medium">Prevention:</span> {result.prevention_suggestion}</div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

const SustainableSection = () => (
  <Card id="sustainable" title="Sustainable Farming" icon={Recycle}>
    <div className="prose prose-green max-w-none">
      <p className="text-green-800">
        Build resilient farms with soil health, water conservation, and biodiversity at the core. Start small, measure impact, and scale what works.
      </p>
      <ul className="list-disc pl-5 text-green-800">
        <li>Adopt crop rotation and cover crops to enrich soil.</li>
        <li>Use drip irrigation and rainwater harvesting to save water.</li>
        <li>Deploy integrated pest management to reduce chemicals.</li>
        <li>Compost farm waste to create natural fertilizers.</li>
      </ul>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop" alt="farm field" className="rounded-xl shadow" />
        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=900&auto=format&fit=crop" alt="greenhouse" className="rounded-xl shadow" />
      </div>
    </div>
  </Card>
);

const Sections = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
      <HomeSection />
      <CropSection />
      <DiseaseSection />
      <SustainableSection />
    </div>
  );
};

export default Sections;