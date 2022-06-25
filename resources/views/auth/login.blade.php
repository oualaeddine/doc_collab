<x-guest-layout>
  <!-- BEGIN: Content-->
  <div class="app-content content ">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
        <div class="content-header row">
        </div>
        <div class="content-body">
            <div class="auth-wrapper auth-basic px-2">
                <div class="auth-inner my-2">
                    <!-- Login basic -->
                    <div class="card mb-0">
                        <div class="card-body">
                            <a href="{{ route('login') }}" class="brand-logo">

                                <h2 class="brand-text text-primary ms-1">medicalProject</h2>
                            </a>

                            <h4 class="card-title mb-1">Bienvenue chez medicalProject </h4>

                            <!-- Session Status -->
                            <x-auth-session-status class="mb-4" :status="session('status')" />

                            <!-- Validation Errors -->
                            <x-auth-validation-errors class="mb-4" :errors="$errors" />
                        <form method="POST" action="{{ route('login') }}">
                            @csrf                                <div class="mb-1">
                                    <label for="username" class="form-label">Nom d'utilisateur</label>
                                    <input type="text" class="form-control" id="username" name="username" :value="old('username')"  placeholder="Nom d'utilisateur"  autofocus />
                                </div>

                                <div class="mb-1">
                                    <div class="input-group input-group-merge form-password-toggle">
                                        <input type="password" class="form-control form-control-merge" id="password" name="password" required  placeholder="Mot de Passe">
                                        <span class="input-group-text cursor-pointer"><i data-feather="eye"></i></span>
                                    </div>
                                </div>

                                <button class="btn btn-primary w-100" tabindex="4">Sign in</button>
                            </form>
                            <hr>
                            <div class="auth-footer-btn d-flex " style="flex-flow: row-reverse;">
                                <a href="#" style="color: #000;">
                                 medicalProject v1.0.0
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- /Login basic -->
                </div>
            </div>

        </div>
    </div>
</div>
<!-- END: Content-->

</x-guest-layout>
