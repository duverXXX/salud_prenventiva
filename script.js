lucide.createIcons();

let currentRole = 'paciente';

function selectLoginRole(role) {
    currentRole = role;
    const patientCard = document.getElementById('role-patient-card');
    const doctorCard = document.getElementById('role-doctor-card');

    if (role === 'paciente') {
        patientCard.classList.add('active', 'border-sky-500', 'bg-sky-50');
        patientCard.classList.remove('border-slate-200', 'bg-slate-50');
        
        doctorCard.classList.remove('active', 'border-sky-500', 'bg-sky-50');
        doctorCard.classList.add('border-slate-200', 'bg-slate-50');

        document.getElementById('role-label').innerText = 'Paciente: María';
    } else {
        doctorCard.classList.add('active', 'border-sky-500', 'bg-sky-50');
        doctorCard.classList.remove('border-slate-200', 'bg-slate-50');

        patientCard.classList.remove('active', 'border-sky-500', 'bg-sky-50');
        patientCard.classList.add('border-slate-200', 'bg-slate-50');

        document.getElementById('role-label').innerText = 'Médico: Dr. Carlos';
    }
}

function handleLogin(event) {
    event.preventDefault();
    if (currentRole === 'medico') {
        navigateTo('view-doctor-dashboard');
    } else {
        navigateTo('view-patient-dashboard');
    }
}

function navigateToDashboard() {
    if (currentRole === 'medico') {
        navigateTo('view-doctor-dashboard');
    } else {
        navigateTo('view-patient-dashboard');
    }
}

function navigateTo(viewId) {
    document.querySelectorAll('.view-section').forEach(el => {
        el.classList.remove('active');
    });

    const targetView = document.getElementById(viewId);
    if (targetView) {
        targetView.classList.add('active');
    }

    const header = document.getElementById('main-header');
    if (viewId === 'view-login' || viewId === 'view-register' || viewId === 'view-forgot-password' || viewId === 'view-forgot-confirm') {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleRole() {
    if (currentRole === 'paciente') {
        selectLoginRole('medico');
        navigateTo('view-doctor-dashboard');
    } else {
        selectLoginRole('paciente');
        navigateTo('view-patient-dashboard');
    }
}
