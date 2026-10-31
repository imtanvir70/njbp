import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="অ্যাডমিন লগইন - নিরাপদ যাতায়াত" />

            {status && (
                <div className="mb-4 text-xs font-bold text-emerald-700 bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="space-y-4 font-bengali">
                <div>
                    <label className="block text-xs font-black text-slate-800 mb-1">
                        ইমেইল অ্যাড্রেস
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none transition-all"
                        autoComplete="username"
                        autoFocus
                        placeholder="admin@nirapodjatayat.org"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    <InputError message={errors.email} className="mt-1.5" />
                </div>

                <div>
                    <label className="block text-xs font-black text-slate-800 mb-1">
                        পাসওয়ার্ড
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none transition-all"
                        autoComplete="current-password"
                        placeholder="••••••••"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                    <InputError message={errors.password} className="mt-1.5" />
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            className="rounded text-blue-600 focus:ring-blue-500"
                        />
                        <span className="font-semibold text-slate-600">
                            আমাকে মনে রাখুন
                        </span>
                    </label>

                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="text-xs font-bold text-blue-700 hover:underline"
                        >
                            পাসওয়ার্ড ভুলে গেছেন?
                        </Link>
                    )}
                </div>

                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={processing}
                        className="relative overflow-hidden w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-blue-700 via-sky-600 to-teal-600 hover:from-blue-600 hover:to-sky-500 text-white font-black text-sm shadow-xl shadow-sky-600/25 active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"></div>
                        <span>{processing ? 'লগইন হচ্ছে...' : 'লগইন করুন'}</span>
                    </button>
                </div>

                {/* Quick Demo Helper for User */}
                <div className="mt-5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-500 font-medium space-y-1">
                    <p className="font-bold text-slate-700">ডিফল্ট অ্যাডমিন ক্রেডেনশিয়ালস:</p>
                    <p>ইমেইল: <code className="text-blue-700 font-mono font-bold">admin@nirapodjatayat.org</code></p>
                    <p>পাসওয়ার্ড: <code className="text-blue-700 font-mono font-bold">password123</code></p>
                </div>
            </form>
        </GuestLayout>
    );
}
